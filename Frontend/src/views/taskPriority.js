import { GenericApiFetch } from "../Api/Api";
import { CreateTasksTable } from "../components/Table";
import { ClearPageContent } from "../utils/clearPageContent";
const data = await GenericApiFetch();

export function RenderPriority(taskPriority)
{
    ClearPageContent();
    CreateTasksTable(taskPriority);
}