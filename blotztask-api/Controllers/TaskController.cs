using BlotzTask.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using BlotzTask.Models;

namespace BlotzTask.Controllers
{
    [ApiController]
    [Authorize]
    [Route("/api/[controller]")]
    public class TaskController : ControllerBase
    {
        private readonly ITaskService _taskService;
        public TaskController(ITaskService taskService)
        {
            _taskService = taskService;
        }

        [HttpGet("alltask")]
        public async Task<IActionResult> GetAllTask()
        {
            return Ok(await _taskService.GetTodoItems());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetTaskByID(int id)
        {
            return Ok(await _taskService.GetTaskByID(id));
        }

        [HttpPut("{Id}")]
        public async Task<IActionResult> EditTask(int Id, [FromBody] EditTaskItemDTO editTaskItem)
        {
            var result = await _taskService.EditTask(Id, editTaskItem);

            if (result == null)
            {
                return NotFound("Task not found or you do not have permission to edit this task.");
            }

            return Ok(result);
        }
    }
}
