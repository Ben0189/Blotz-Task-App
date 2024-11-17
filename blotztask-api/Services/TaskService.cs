using BlotzTask.Data;
using BlotzTask.Models;
using Microsoft.EntityFrameworkCore;
using BlotzTask.Data.Entities;
using BlotzTask.Models.CustomError;
using Microsoft.VisualBasic;
using System.Runtime.CompilerServices;

namespace BlotzTask.Services;

public interface ITaskService
{
    public Task<List<TaskItemDTO>> GetTodoItemsByUser(string userId);
    public Task<TaskItemDTO> GetTaskByID(int Id);
    public Task<int> EditTask(int Id, EditTaskItemDTO editTaskItem);
    public Task<string> AddTask(AddTaskItemDTO addtaskItem);
    public Task<int> CompleteTask(int id);
    public Task<List<TaskItemDTO>> GetTaskByDate(DateOnly date);
}

public class TaskService : ITaskService
{
    private readonly BlotzTaskDbContext _dbContext;
    private readonly ILabelService _labelService;

    public TaskService(BlotzTaskDbContext dbContext, ILabelService labelService)
    {
        _dbContext = dbContext;
        _labelService = labelService;
    }

    public async Task<List<TaskItemDTO>> GetTodoItemsByUser(string userId)
    {
        try
        {
            return await _dbContext.TaskItems
                .Where(x => x.UserId == userId)
                .Include(x => x.Label)
                .Select(x => new TaskItemDTO
                {
                    Id = x.Id,
                    Title = x.Title,
                    Label = new LabelDTO { Name = x.Label.Name, Color = x.Label.Color }        
                })
                .ToListAsync();
        }
        catch (Exception ex)
        {
            //TODO: Add some error log throw 
            throw;
        }
    }
    public async Task<TaskItemDTO> GetTaskByID(int Id)
    {
        var task = await _dbContext.TaskItems.Include(t => t.Label) // Ensure Label is included in the query
        .FirstOrDefaultAsync(t => t.Id == Id);

        if (task == null)
        {
            throw new NotFoundException($"Task with ID {Id} not found.");
        }

        var result = new TaskItemDTO()
        {
            Id = task.Id,
            Title = task.Title,
            Description = task.Description,
            DueDate = task.DueDate,
            IsDone = task.IsDone,
            CreatedAt = task.CreatedAt,
            UpdatedAt = task.UpdatedAt,
            Label = task.Label != null ? new LabelDTO
            {
                LabelId = task.Label.LabelId,
                Name = task.Label.Name,
                Color = task.Label.Color,
                Description = task.Label.Description
            } : null
        };

        return result;
    }

    public async Task<string> AddTask(AddTaskItemDTO addtaskItem)
    {
        Label? label = null;
        if (addtaskItem.LabelId != 0)
        {
            label = await _labelService.GetLabelById(addtaskItem.LabelId);
            if (label == null)
            {
                throw new NotFoundException($"Label with ID {addtaskItem.LabelId} not found.");
            }
        }
        var addtask = new TaskItem
        {
            Title = addtaskItem.Title,
            Description = addtaskItem.Description,
            CreatedAt = DateTime.UtcNow, 
            UpdatedAt = DateTime.UtcNow,
            LabelId = label?.LabelId ?? 0,
            Label = label
        };

        _dbContext.TaskItems.Add(addtask);
        await _dbContext.SaveChangesAsync();

        return addtaskItem.Title;

    }

    public async Task<int> EditTask(int id, EditTaskItemDTO editTaskItem)
    {
        var task = await _dbContext.TaskItems.FindAsync(id);

        if (task == null)
        {
            throw new NotFoundException($"Task with ID {id} not found.");
        }

        task.Title = editTaskItem.Title;
        task.Description = editTaskItem.Description;
        task.UpdatedAt = DateTime.UtcNow;

        _dbContext.TaskItems.Update(task);
        await _dbContext.SaveChangesAsync();

        return id;
    }

    public async Task<int> CompleteTask(int taskId)
    {
        var task = await _dbContext.TaskItems.FindAsync(taskId);

        if (task == null)
        {
            throw new NotFoundException($"Task with ID {taskId} was not found.");
        }

        task.IsDone = true;

        _dbContext.TaskItems.Update(task);
        await _dbContext.SaveChangesAsync();

        return taskId;
    }

    public async Task<List<TaskItemDTO>> GetTaskByDate(DateOnly date)
    {
        try
        {
            return await _dbContext.TaskItems
                .Where(task => task.DueDate == date)
                .Select(task => new TaskItemDTO
                {
                    Id = task.Id,
                    Title = task.Title,
                    Description = task.Description,
                    DueDate = task.DueDate,
                    IsDone = task.IsDone
                })
                .ToListAsync();
        }
        catch (Exception ex)
        {
            throw new Exception($"Unhandled exception: {ex.Message}");
        }
    }
}

