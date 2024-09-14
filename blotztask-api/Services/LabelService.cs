using BlotzTask.Data;
using BlotzTask.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace BlotzTask.Services;

public interface ILabelService
{
    Task<List<Label>> GetAllLabelsAsync();
}
public class LabelService : ILabelService
{
    private readonly BlotzTaskDbContext _dbContext;

    public LabelService(BlotzTaskDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    public async Task<List<Label>> GetAllLabelsAsync()
    {
        return await _dbContext.Labels.ToListAsync();
    }
}

