using System.ComponentModel.DataAnnotations.Schema;
using BlotzTask.Data.Entities;

public class TaskItem
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;  // 初始化为非空字符串
    public string Description { get; set; } = string.Empty;  // 初始化为非空字符串
    public DateOnly DueDate { get; set; }
    public bool IsDone { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;
    public string UserId { get; set; } = string.Empty;  // 初始化为非空字符串

    [ForeignKey("UserId")]
    public User User { get; set; } = new User();  // 初始化为新的 User 对象
}
