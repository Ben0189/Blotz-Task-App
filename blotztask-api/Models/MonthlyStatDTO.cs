using System.Collections.Generic;

namespace BlotzTask.Models
{
    public class MonthlyStatDTO
    {
        public MonthlyStatDTO(string inputMonth) {
            CurrentMonth = inputMonth;
            Tasks = new Tasks();
        }
        public string CurrentMonth { get; set; }
        public Tasks Tasks { get; set; }
    }

    public class Tasks
    {
        public Tasks () {
            Completed = new Dictionary<string, int>();
            Uncompleted = new Dictionary<string, int>();
        }
        public Dictionary<string, int> Completed { get; set; }
        public Dictionary<string, int> Uncompleted { get; set; }
    }
}