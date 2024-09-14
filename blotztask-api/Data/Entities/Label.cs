namespace BlotzTask.Data.Entities
{
    public class Label
    {
        
        public int LabelId { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Color { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
    }
}
