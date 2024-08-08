using BlotzTask.Services;
using Microsoft.AspNetCore.Mvc;

namespace BlotzTask.Controllers
{
    [ApiController]
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

        [HttpPost("taskbyID")]
        public async Task<IActionResult> GetTaskByID(int ID)
        {
            var taskItem = await _taskService.GetBtID(ID);

            if (taskItem == null)
            {
                return NotFound(); 
            }

            return Ok(taskItem); 
        }
    }
}
