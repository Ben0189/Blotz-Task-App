using BlotzTask.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BlotzTask.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class LabelController : ControllerBase
    {
        private readonly ILabelService _labelService;

        public LabelController(ILabelService labelService)
        {
            _labelService = labelService;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetLabelById(int id)
        {
            return Ok(await _labelService.GetLabelById(id)); // Return 200 OK with the label data
        }
        
    }
}
