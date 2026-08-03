using Backend.Models;
using static Backend.DTO.UpdatedToDoTaskDto;

namespace Backend.Data.Seeding
{
    public class ToDoTaskSeeder
    {
        public static void Seed(ToDoContext context)
        {
            if (context.ToDoTasks.Any())
                return;

            context.ToDoTasks.AddRange(
                new ToDoTask { Id = 1, Name = "Study physics", priority = Priority.Medium, Details = "Study chapter 2 and revise chapter 1", CreationDate = DateTime.Now, DueDate = new DateTime(2025, 12, 25, 10, 30, 00) },
                new ToDoTask { Id = 2, Name = "Hang out with my friends", priority = Priority.High, Details = "Meet with my friends at the old park", CreationDate = DateTime.Now, DueDate = new DateTime(2026, 2, 8, 12, 30, 00) }
            );
        }
    }
}
