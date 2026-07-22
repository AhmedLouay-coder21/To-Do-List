
export default function CreateAllTasksTable(newTask)
{
    const Table = document.createElement("table");
    Table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Priority</th>
            <th>Details</th>
            <th>Creation Date</th>
            <th>Due Date</th>
            <th>Days since creation</th>
        </tr>
          <tr>
            <td>${newTask.Name}</td>
            <td>${newTask.Priority}</td>
            <td>${newTask.Details}</td>
            <td>${newTask.creationDate}</td>
            <td>${newTask.dueDate}</td>
            <td>${newTask.daysSinceCreation}</td>
        </tr>
        `;
    document.querySelector("body").appendChild(Table);
}