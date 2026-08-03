namespace Backend.DTO
{
    public class UpdatedToDoTaskDto
    {
        public string? Name { get; set; }
        public enum Priority { Low, Medium, High, VeryHigh }
        public string? Details { get; set; }
        public DateTime? DueDate { get; set; }
    }
}
