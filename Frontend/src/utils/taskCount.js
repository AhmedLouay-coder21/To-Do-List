import { isFuture, isToday } from "date-fns";
import { data } from "../data/data";
export function todayTasksCount()
{
    let count = 0;
    data.forEach(task => {
        if(isToday(task.dueDate))
        {
            count++;
        }
    });
    return count;
}
export function upcomingTasksCount()
{
    let count = 0;
    data.forEach(task => {
        if(isFuture(task.dueDate))
        {
            count++;
        }
    });
    return count;
}