namespace BlotzTask.Models
{
    public class AddTaskItemDTO
    {
        public string? Title { get; set; }  // 允许 Title 为 null
        public string? Description { get; set; }  // 允许 Description 为 null
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public AddTaskItemDTO()
        {
            CreatedAt = DateTime.Now;
            UpdatedAt = DateTime.Now;
        }
    }
}
