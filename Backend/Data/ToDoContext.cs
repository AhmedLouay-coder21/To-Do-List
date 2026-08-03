using Microsoft.EntityFrameworkCore;
using Backend.Models;

namespace Backend.Data
{
    public class ToDoContext : DbContext
    {

        public ToDoContext(DbContextOptions<ToDoContext> options) 
        : base(options)
        {
        }
        public DbSet<ToDoTask> ToDoTasks { get; set; }
    }
}
