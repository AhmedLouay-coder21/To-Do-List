import { isFuture, isToday } from "date-fns";
import { GenericApiFetch } from "../Api/Api";
const data = await GenericApiFetch();

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
export function taskPriorityCount(taskPriority)
{
    let count = 0;
    data.forEach(task => {
        if(task.priority == taskPriority)
        {
            count++;
        }
    });
    return count;
}
export function allTasksCount()
{
    const count = data.length;
    return count
}