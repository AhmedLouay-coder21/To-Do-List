using Backend.Data;
using Backend.DTO;
using Backend.Models;
using Microsoft.EntityFrameworkCore;
using Backend.Interfaces;

namespace Backend.Services
{
    public class ProjectService : IProjectService
    {
        private readonly ToDoContext _context;
        public ProjectService(ToDoContext context)
        {
            _context = context;
        }
        public string CreateProject(Project project)
        {
            if (project == null)
            {
                return "An error has occurred, The project was not created!";
            }
            _context.Projects.Add(project);
            _context.SaveChanges();
            return "A new Project was added successfully!";
        }
        public List<Project> GetAllProjects()
        {
            return _context.Projects.ToList();
        }
        public Project GetProjectById(int Id)
        {
            var project = _context.Projects.FirstOrDefault(t => t.Id == Id);
            if (project == null)
            {
                return null;
            }
            return project;
        }
        public Project UpdateProject(int Id, UpdatedProjectDto updatedProjectDto)
        {
            var project = _context.Projects.FirstOrDefault(t => t.Id == Id);

            if (project == null)
            {
                return null;
            }
            if (updatedProjectDto.Name != null)
                project.Name = updatedProjectDto.Name;

            _context.Projects.Update(project);
            _context.SaveChanges();

            return project;
        }
        public string? DeleteProjectById(int Id)
        {
            var project = _context.Projects.FirstOrDefault(t => t.Id == Id);
            if (project == null)
            {
                return null;
            }
            _context.Projects.Remove(project);
            _context.SaveChanges();

            return "The project was deleted successfully";
        }
        public string? DeleteAllProjects()
        {
            _context.Projects.ExecuteDelete();

            return "All projects were deleted successfully";
        }
    }
}
