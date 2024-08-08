namespace BlotzTask.Models
{
    public class TaskItemDTO
    {
        public int Id { get; set; }
        public string DisplayId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public bool IsDone { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
