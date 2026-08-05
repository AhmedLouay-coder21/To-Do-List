
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
        `;

    newTask.forEach(task => {
    Table.innerHTML += `
        <tr>
            <td>${task.name}</td>
            <td>${task.priority}</td>
            <td>${task.details}</td>
            <td>${task.creationDate}</td>
            <td>${task.dueDate}</td>
            <td>${task.daysSinceCreation}</td>
        </tr>
    `;
});
    document.querySelector("body").appendChild(Table);
}