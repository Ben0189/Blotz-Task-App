using System.ComponentModel.DataAnnotations.Schema;
using BlotzTask.Data.Entities;

public class TaskItem
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty; 
    public string Description { get; set; } = string.Empty;
    public DateOnly DueDate { get; set; }
    public bool IsDone { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;
    public string UserId { get; set; } = string.Empty; 

    [ForeignKey("UserId")]
    public User User { get; set; } = new User();  
}
