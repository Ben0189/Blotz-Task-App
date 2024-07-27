using System.ComponentModel.DataAnnotations.Schema;

namespace BlotzTask.Data.Entities
{
    public class TaskItem
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Title { get; set; }
    }
}
