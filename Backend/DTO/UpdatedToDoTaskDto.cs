using Backend.Enums;

namespace Backend.DTO
{
    public class UpdatedToDoTaskDto
    {
        public string? Name { get; set; }
        public Priority? Priority { get; set; }
        public string? Details { get; set; }
        public bool? IsCompleted { get; set; } = false;
        public DateTime? DueDate { get; set; }
    }
}
