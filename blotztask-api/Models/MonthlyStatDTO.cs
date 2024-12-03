namespace BlotzTask.Models
{
    public class MonthlyStatDTO
    {
        public required string CurrentMonth { get; set; }
        public required Tasks Data { get; set; }
    }

    public class Tasks
    {
        public Dictionary<string, int> Completed = new Dictionary<string, int>();
        public Dictionary<string, int> Uncompleted = new Dictionary<string, int>();
    }
}