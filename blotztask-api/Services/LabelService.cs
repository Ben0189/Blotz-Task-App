using BlotzTask.Data;
using BlotzTask.Data.Entities;
using BlotzTask.Models;
using Microsoft.EntityFrameworkCore;

namespace BlotzTask.Services;

public interface ILabelService
{
    public Task<List<LabelDTO>> GetAllLabelsAsync();
    public Task<Label> GetLabelById(int id);
    public Task<string> AddLabelAsync(AddLabelDTO addLabel);
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
                            .Select(label => new LabelDTO
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

    public async Task<Label> GetLabelById(int id)
    {
        return await _dbContext.Labels.FindAsync(id);
    }

    public async Task<string> AddLabelAsync(AddLabelDTO addLabel)
    {
        var addlabel = new Label
        {
            Name = addLabel.Name,
            Color = addLabel.Color,
            Description = addLabel.Description
        };

        _dbContext.Labels.Add(addlabel);
        await _dbContext.SaveChangesAsync();

        return addLabel.Name;
    }
}
