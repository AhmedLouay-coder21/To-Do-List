import { isFuture, isToday } from "date-fns";
import { data } from "../data/data";
import { CreateTasksTable } from "../components/Table";
export function RenderToday()
{
    CreateTasksTable('today');
}