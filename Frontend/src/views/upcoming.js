import { isFuture } from "date-fns";
import { data } from "../data/data";
import { CreateTasksTable } from "../components/Table";
export function RenderUpcoming()
{
    CreateTasksTable('upcoming');
}