using BlotzTask.Models;
using BlotzTask.Services;
using Microsoft.AspNetCore.Mvc;

namespace BlotzTask.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
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
            return Ok(await _taskService.GetTodoItems());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetTaskByID(int id)
        {
            return Ok(await _taskService.GetTaskByID(id));
        }
        
        [HttpPost]
        public async Task<IActionResult> AddTask([FromBody] AddTaskItemDTO addtaskItem)
        {
            if (addtaskItem.LabelId.HasValue)
            {
                var label = await _labelService.GetLabelById(addtaskItem.LabelId.Value);
                if (label == null)
                {
                    return NotFound($"Label with ID {addtaskItem.LabelId} not found.");
                }
            }
            return Ok(await _taskService.AddTask(addtaskItem));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditTask(int id, [FromBody] EditTaskItemDTO editTaskItem)
        {
            var result = await _taskService.EditTask(id, editTaskItem);

            return Ok($"Task {result} is successfully updated");
        }
    }
}
