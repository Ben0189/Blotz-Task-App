using BlotzTask.Data;
using BlotzTask.Models;
using Microsoft.EntityFrameworkCore;

namespace BlotzTask.Services;

public interface ITaskService
{
    public Task<List<TaskItemDTO>> GetTodoItems();
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
                    DisplayId = $"Task-{x.Id}",
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
}

