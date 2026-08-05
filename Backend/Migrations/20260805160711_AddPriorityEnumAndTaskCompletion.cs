using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class AddPriorityEnumAndTaskCompletion : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "priority",
                table: "ToDoTasks",
                newName: "Priority");

            migrationBuilder.AddColumn<bool>(
                name: "IsCompleted",
                table: "ToDoTasks",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsCompleted",
                table: "ToDoTasks");

            migrationBuilder.RenameColumn(
                name: "Priority",
                table: "ToDoTasks",
                newName: "priority");
        }
    }
}
