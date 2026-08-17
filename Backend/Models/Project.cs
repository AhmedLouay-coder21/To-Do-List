namespace Backend.Models
{
    public class Project
    {
        public int Id { get; set; } 
        public string? Name { get; set; }

        public ICollection<ToDoTask> Tasks { get; set; } = new List<ToDoTask>();
    }
}
