using BlotzTask.Data;
using BlotzTask.Models;
using Microsoft.EntityFrameworkCore;
using BlotzTask.Data.Entities;

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

    public TaskService(BlotzTaskDbContext dbContext)
    {
        _dbContext = dbContext;
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
        
        var taskItems = new List<TaskItemDTO>
    {
        new TaskItemDTO { Id = 0, Title = "Task 0", Description = "Description for Task 1", IsDone = false, CreatedAt = DateTime.Now, UpdatedAt = DateTime.Now },
        new TaskItemDTO { Id = 1, Title = "Task 1", Description = "Description for Task 2", IsDone = true, CreatedAt = DateTime.Now, UpdatedAt = DateTime.Now },
        new TaskItemDTO { Id = 2, Title = "Task 2", Description = "Description for Task 3", IsDone = false, CreatedAt = DateTime.Now, UpdatedAt = DateTime.Now }
    };

        return await Task.FromResult(taskItems[Id]);
    }

    public async Task<string> AddTask(AddTaskItemDTO addtaskItem)
    {
        var addtask = new TaskItem
        {
            Title = addtaskItem.Title,
            Description = addtaskItem.Description,
            CreatedAt = DateTime.UtcNow, 
            UpdatedAt = DateTime.UtcNow
        };

        _dbContext.TaskItems.Add(addtask);
        await _dbContext.SaveChangesAsync();

        return addtaskItem.Title;

    }

    public async Task<int> EditTask(int Id, EditTaskItemDTO editTaskItem)
    {
        var task = await _dbContext.TaskItems.FindAsync(Id);

        if (task != null)
        {
            task.Title = editTaskItem.Title;
            task.Description = editTaskItem.Description;
            task.UpdatedAt = DateTime.UtcNow;

            _dbContext.TaskItems.Update(task);
            await _dbContext.SaveChangesAsync();
            return Id;
        }
         else {
            return -1;
         }
    }
}

