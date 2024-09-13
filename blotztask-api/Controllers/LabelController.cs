using BlotzTask.Data;
using BlotzTask.Data.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BlotzTask.Controllers
{
    [ApiController]
    [Authorize]
    [Route("api/[controller]")]
    public class LabelController : ControllerBase
    {
        private readonly BlotzTaskDbContext _labelContext;

        public LabelController(BlotzTaskDbContext labelContext)
        {
            _labelContext = labelContext;
        }

        [HttpGet]
        public async Task<ActionResult<List<Label>>> GetAllLabels()
        {
            var labels = await _labelContext.Labels.ToListAsync();
            return Ok(labels);
        }
    }
}
