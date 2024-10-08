namespace BlotzTask.Models
{
    public class AddTaskItemDTO
    {
        public string? Title { get; set; }  
        public string? Description { get; set; } 
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public AddTaskItemDTO()
        {
            CreatedAt = DateTime.Now;
            UpdatedAt = DateTime.Now;
        }
    }
}
