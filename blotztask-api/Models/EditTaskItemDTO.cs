using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlotzTask.Models
{
    public class EditTaskItemDTO
{
    public string Title { get; set; }
    public string Description { get; set; }
    public DateOnly DueDate { get; set; } 
    public bool IsDone { get; set; }
    public DateTime UpdatedAt { get; set; }

}
}