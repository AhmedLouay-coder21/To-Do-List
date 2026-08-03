using Backend.DTO;

namespace Backend.Models
{
    public class ToDoTask
    {
        public int Id { get; set; }
        public string? Name { get; set; } = "";
        public enum Priority { Low, Medium, High, VeryHigh }
        public string? Details { get; set; } = "";
        public DateTime? CreationDate { get; set; }
        public DateTime? DueDate { get; set; }
        public UpdatedToDoTaskDto.Priority priority { get; internal set; }
    }
}
