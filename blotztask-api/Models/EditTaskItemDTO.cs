namespace BlotzTask.Models
{
    public class EditTaskItemDTO
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;  // 初始化为非空字符串
        public string Description { get; set; } = string.Empty;  // 初始化为非空字符串
        public DateOnly DueDate { get; set; }
        public bool IsDone { get; set; }
    }
}
