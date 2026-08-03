using Backend.DTO;
using Backend.Models;

namespace Backend.Interfaces
{
    public interface ITaskService
    {
        public string? CreateTask(ToDoTask toDoTask);
        public List<ToDoTask> GetAllTasks();
        public ToDoTask GetTaskById(int Id);
        public ToDoTask UpdateTask(int Id, UpdatedToDoTaskDto updatedToDoTaskDto);
        public string? DeleteTaskById(int Id);
        public string? DeleteAllTasks();
    }
}
