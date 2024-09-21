using BlotzTask.Data;
using BlotzTask.Data.Entities;
using BlotzTask.Models;
using Microsoft.EntityFrameworkCore;

namespace BlotzTask.Services;

public interface ILabelService
{
    public Task<Label> GetLabelById(int id);
}

public class LabelService : ILabelService
{
    private readonly BlotzTaskDbContext _dbContext;

    public LabelService(BlotzTaskDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<Label> GetLabelById(int id)
    {
        return await _dbContext.Labels.FindAsync(id);
    }
}
