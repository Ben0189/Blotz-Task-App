using BlotzTask.Models;
using BlotzTask.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BlotzTask.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    [Authorize]
    public class TaskController : ControllerBase
    {
        private readonly ITaskService _taskService;
        private readonly ILabelService _labelService;
        public TaskController(ITaskService taskService)
        {
            _taskService = taskService;
        }

        [HttpGet("alltask")]
        public async Task<IActionResult> GetAllTask()
        {
            var userId = HttpContext.Items["UserId"] as string;

            if (userId == null)
            {
                throw new UnauthorizedAccessException("Could not find user id from Http Context");
            }

            return Ok(await _taskService.GetTodoItemsByUser(userId));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetTaskByID(int id)
        {
            return Ok(await _taskService.GetTaskByID(id));
        }

        [HttpGet("due-date/{date}")]
        public async Task<IActionResult> GetTaskByDate(DateOnly date)
        {
            return Ok(await _taskService.GetTaskByDate(date));
        }

        [HttpPost]
        public async Task<IActionResult> AddTask([FromBody] AddTaskItemDTO addtaskItem)
        {
            return Ok(await _taskService.AddTask(addtaskItem));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditTask(int id, [FromBody] EditTaskItemDTO editTaskItem)
        {
            var result = await _taskService.EditTask(id, editTaskItem);

            return Ok($"Task {result} is successfully updated");
        }

        [HttpPut("CompleteTask{id}")]
        public async Task<IActionResult> CompleteTask(int taskId)
        {
            var result = await _taskService.CompleteTask(taskId);

            return Ok($"Task {result} is done");
        }
    }
}
