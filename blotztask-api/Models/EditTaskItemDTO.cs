namespace BlotzTask.Models
{
    public class EditTaskItemDTO
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;  
        public string Description { get; set; } = string.Empty; 
        public DateOnly DueDate { get; set; }
        public bool IsDone { get; set; }
    }
}
