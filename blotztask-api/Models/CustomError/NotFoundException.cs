namespace BlotzTask.Models.CustomError;
public class NotFoundException : Exception
{
    public NotFoundException(string message) : base(message) { }
}
