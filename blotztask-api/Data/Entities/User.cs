using Microsoft.AspNetCore.Identity;

namespace BlotzTask.Data.Entities;
public class User : IdentityUser
{
   public ICollection<TaskItem>? TaskItems { get; set; }

}
