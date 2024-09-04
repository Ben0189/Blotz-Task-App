namespace BlotzTask.Data.Entities
{
    public class Label
    {
        public int LabelId { get; set; }// Primary Key
        public required string Name { get; set; }// Name of the label
        public string Color { get; set; } = string.Empty;// Color associated with the label (optional)
        public string Description { get; set; } = string.Empty;// Description of the label (optional)
    }
}
