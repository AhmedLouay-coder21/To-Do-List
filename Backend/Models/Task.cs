using Backend.DTO;
using Backend.Enums;

namespace Backend.Models
{
    public class ToDoTask
    {
        public int Id { get; set; }
        public string? Name { get; set; } = "";
        public Priority Priority { get; set; }
        public string? Details { get; set; } = "";
        public bool IsCompleted { get; set; } = false;
        public DateTime? CreationDate { get; set; }
        public DateTime? DueDate { get; set; }
    }
}
