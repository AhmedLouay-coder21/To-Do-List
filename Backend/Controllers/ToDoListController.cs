using Microsoft.AspNetCore.Mvc;
using Backend.Interfaces;
using Backend.DTO;
using Backend.Models;

namespace Backend.Controllers
{
    [ApiController]
    [Route("/tasks")]
    public class ToDoListController : ControllerBase
    {
        private readonly ITaskService _taskService;
        public ToDoListController(ITaskService taskService)
        {
            _taskService = taskService;
        }

        [HttpPost]
        public ActionResult<string?> CreateTask(ToDoTask toDoTask)
        {
            return Ok(_taskService.CreateTask(toDoTask));
        }

        [HttpGet]
        public ActionResult<List<ToDoTask>> GetAllTasks()
        {
			return Ok(_taskService.GetAllTasks());
        }

        [HttpGet("{Id}")]
        public ActionResult<ToDoTask> GetTaskById(int Id)
        {
            return Ok(_taskService.GetTaskById(Id));
        }

        [HttpPatch("{Id}")]
        public ActionResult<ToDoTask> UpdateTask(int Id, UpdatedToDoTaskDto updatedToDoTaskDto)
        {
            return Ok(_taskService.UpdateTask(Id, updatedToDoTaskDto));
        }

        [HttpDelete("{Id}")]
        public ActionResult<string?> DeleteTaskById(int Id)
        {
            return Ok(_taskService.DeleteTaskById(Id));
        }

        [HttpDelete]
        public ActionResult<string?> DeleteAllTasks()
        {
            return Ok(_taskService.DeleteAllTasks());
        }
    }
}
