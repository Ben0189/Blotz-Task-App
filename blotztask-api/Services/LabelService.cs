using BlotzTask.Data;
using BlotzTask.Models;
using Microsoft.EntityFrameworkCore;

namespace BlotzTask.Services;

public interface ILabelService
{
    public Task<List<LabelDTO>> GetAllLabelsAsync();
}
public class LabelService : ILabelService
{
    private readonly BlotzTaskDbContext _dbContext;

    public LabelService(BlotzTaskDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    public async Task<List<LabelDTO>> GetAllLabelsAsync()
    {
        try
        {
            return await _dbContext.Labels
                .Select (label => new LabelDTO
                {
                    LabelId = label.LabelId,
                    Name = label.Name,
                    Color = label.Color,
                    Description = label.Description
                }).ToListAsync();
        }
        catch (Exception ex)
        {
            //TODO: Add some error log throw (havent create PBI)
            throw;
        }
    }
}

