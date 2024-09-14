using BlotzTask.Data;
using BlotzTask.Data.Entities;
using BlotzTask.Services;
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
        private readonly ILabelService _labelService;

        public LabelController(ILabelService labelService)
        {
            _labelService = labelService;
        }

        [HttpGet("alllabel")]
        public async Task<IActionResult> GetAllLabels()
        {
            return Ok(await _labelService.GetAllLabelsAsync());
        }
    }
}
