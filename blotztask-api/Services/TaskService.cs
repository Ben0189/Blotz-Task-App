using BlotzTask.Data;
using BlotzTask.Models;
using Microsoft.EntityFrameworkCore;

namespace BlotzTask.Services;

public interface ITaskService
{
    public Task<List<TaskItemDTO>> GetTodoItems();
    public Task<TaskItemDTO> GetTaskByID(int Id);
    public Task<bool> DeleteTaskByID(int Id);
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
    public async Task<bool> DeleteTaskByID(int Id)
    {
        var taskItem = await _dbContext.TaskItems.FindAsync(Id);
        if (taskItem == null)
        {
            return false; 
        }

        _dbContext.TaskItems.Remove(taskItem);
        await _dbContext.SaveChangesAsync();
        return true; 
    }

}

