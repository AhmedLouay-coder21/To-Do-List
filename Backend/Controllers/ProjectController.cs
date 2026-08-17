using Backend.DTO;
using Backend.Interfaces;
using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/project")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        private readonly IProjectService _projectService;
        public ProjectController(IProjectService projectService)
        {
            _projectService = projectService;
        }

        [HttpPost]
        public ActionResult<string?> CreateProject(Project project)
        {
            return Ok(_projectService.CreateProject(project));
        }

        [HttpGet]
        public ActionResult<List<Project>> GetAllProjects()
        {
            return Ok(_projectService.GetAllProjects());
        }

        [HttpGet("{Id}")]
        public ActionResult<Project> GetProjectById(int Id)
        {
            return Ok(_projectService.GetProjectById(Id));
        }

        [HttpPatch("{Id}")]
        public ActionResult<Project> UpdateProject(int Id, UpdatedProjectDto updatedProjectDto)
        {
            return Ok(_projectService.UpdateProject(Id, updatedProjectDto));
        }

        [HttpDelete("{Id}")]
        public ActionResult<string?> DeleteProjectById(int Id)
        {
            return Ok(_projectService.DeleteProjectById(Id));
        }

        [HttpDelete]
        public ActionResult<string?> DeleteAllProjects()
        {
            return Ok(_projectService.DeleteAllProjects());
        }
    }
}
