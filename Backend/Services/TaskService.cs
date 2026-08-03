using Backend.Data;
using Backend.DTO;
using Backend.Interfaces;
using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Services
{
    public class TaskService : ITaskService
    {
        private readonly ToDoContext _context;
        public TaskService(ToDoContext context)
        {
            _context = context;
        }
        public string? CreateTask(ToDoTask toDoTask)
        {
            if (toDoTask == null)
            {
                return "An error has occurred, The task was not created!";
            }
            _context.ToDoTasks.Add(toDoTask);
            _context.SaveChanges();
            return "ToDoTask Was added successfully";
        }
        public List<ToDoTask> GetAllTasks()
        {
            var toDoTask = _context.ToDoTasks.ToList();
            if (!toDoTask.Any())
            {
                return null;
            }
            return toDoTask;
        }
        public ToDoTask GetTaskById(int Id)
        {
            var task = _context.ToDoTasks.FirstOrDefault(t => t.Id == Id);
            if (task == null)
            {
                return null;
            }
            return task;
        }
        public ToDoTask UpdateTask(int Id, UpdatedToDoTaskDto updatedToDoTaskDto)
        {
            var toDoTask = _context.ToDoTasks.FirstOrDefault(t => t.Id == Id);

            if (toDoTask == null)
            {
                return null;
            }
            if (updatedToDoTaskDto.Name != null)
                toDoTask.Name = updatedToDoTaskDto.Name;

            //if (updatedToDoTaskDto.Priority != null)
            //    toDoTask.Priority = updatedToDoTaskDto.Priority;

            if (updatedToDoTaskDto.Details != null)
                toDoTask.Details = updatedToDoTaskDto.Details;

            if (updatedToDoTaskDto.DueDate.HasValue)
                toDoTask.DueDate = updatedToDoTaskDto.DueDate;

            _context.ToDoTasks.Update(toDoTask);
            _context.SaveChanges();

            return toDoTask;
        }
        public string? DeleteTaskById(int Id)
        {
            var task = _context.ToDoTasks.FirstOrDefault(t => t.Id == Id);
            if (task == null)
            {
                return null;
            }
            _context.ToDoTasks.Remove(task);
            return "The task was deleted successfully";
        }
        public string? DeleteAllTasks()
        {
            _context.ToDoTasks.ExecuteDelete();
            return "All tasks was deleted successfully";
        }
    }
}
