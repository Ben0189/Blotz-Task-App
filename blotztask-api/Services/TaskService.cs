using BlotzTask.Data;
using BlotzTask.Models;
using Microsoft.EntityFrameworkCore;
using BlotzTask.Data.Entities;
using BlotzTask.Models.CustomError;

namespace BlotzTask.Services;

public interface ITaskService
{
    public Task<List<TaskItemDTO>> GetTodoItems();
    public Task<TaskItemDTO> GetTaskByID(int Id);
    public Task<int> EditTask(int Id, EditTaskItemDTO editTaskItem);
    public Task<string> AddTask(AddTaskItemDTO addtaskItem);
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

    public async Task<List<TaskItemDTO>> GetTodoItems()
    {
        try
        {
            return await _dbContext.TaskItems
                .Select(x => new TaskItemDTO
                {
                    Id = x.Id,
                    Title = x.Title
                })
                .ToListAsync();
        }
        catch (Exception ex)
        {
            //TODO: Add some error log throw (havent create PBI)
            throw;
        }
    }
    public async Task<TaskItemDTO> GetTaskByID(int Id)
    {
        var labelUrgent = await _dbContext.Labels.FirstOrDefaultAsync(l => l.Name == "Urgent");
        var labelCompleted = await _dbContext.Labels.FirstOrDefaultAsync(l => l.Name == "Completed");

        var urgentLabelDTO = labelUrgent != null ? new LabelDTO
        {
            LabelId = labelUrgent.LabelId,
            Name = labelUrgent.Name,
            Color = labelUrgent.Color,
            Description = labelUrgent.Description
        } : null;

        var completedLabelDTO = labelCompleted != null ? new LabelDTO
        {
            LabelId = labelCompleted.LabelId,
            Name = labelCompleted.Name,
            Color = labelCompleted.Color,
            Description = labelCompleted.Description
        } : null;

        var taskItems = new List<TaskItemDTO>
    {
        new TaskItemDTO { Id = 0, Title = "Task 0", Description = "Description for Task 1", IsDone = false, CreatedAt = DateTime.Now, UpdatedAt = DateTime.Now, Label = urgentLabelDTO },
        new TaskItemDTO { Id = 1, Title = "Task 1", Description = "Description for Task 2", IsDone = true, CreatedAt = DateTime.Now, UpdatedAt = DateTime.Now, Label = completedLabelDTO },
        new TaskItemDTO { Id = 2, Title = "Task 2", Description = "Description for Task 3", IsDone = false, CreatedAt = DateTime.Now, UpdatedAt = DateTime.Now, Label = null }
    };

        return await Task.FromResult(taskItems[Id]);
    }

    public async Task<string> AddTask(AddTaskItemDTO addtaskItem)
    {
        Label? label = null;
        if (addtaskItem.LabelId.HasValue)
        {
            label = await _labelService.GetLabelById(addtaskItem.LabelId.Value);
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
}

