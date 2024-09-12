using System.ComponentModel.DataAnnotations;

namespace BlotzTask.Models
{
    public class SampleValidationDTO
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "An Album Title is required")]
        [StringLength(160)]
        public string Title { get; set; }

        [MaxLength(10, ErrorMessage = "Description should be less than 10")]
        public string Description { get; set; }
        public bool IsDone { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
