using BlotzTask.Data.Entities;
using BlotzTask.Models;
using FluentValidation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BlotzTask.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SampleValidationController : ControllerBase
    {

        // POST api/<SampleValidationController>
        [HttpPost]
        [AllowAnonymous]
        public IActionResult CreateValidation(SampleValidationDTO dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // Process the valid user model (e.g., save to a database)
            return Ok("Created successfully!");
        }

    }
}
