using Backend.DTO;
using Backend.Models;

namespace Backend.Interfaces
{
    public interface IProjectService
    {
        public string? CreateProject(Project project);
        public List<Project> GetAllProjects();
        public Project GetProjectById(int Id);
        public Project UpdateProject(int Id, UpdatedProjectDto updatedProjectDto);
        public string? DeleteProjectById(int Id);
        public string? DeleteAllProjects();
    }
}
