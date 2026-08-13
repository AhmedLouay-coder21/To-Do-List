import { GenericApiFetch } from "../Api/Api";
import { CreateTasksTable } from "../components/Table";
const data = await GenericApiFetch();

export function RenderPriority(taskPriority)
{
    CreateTasksTable(taskPriority);
}