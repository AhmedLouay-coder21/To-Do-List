import { headers } from "../components/Sidebar";
import { format, getDay } from "date-fns";

export function ConvertTasksToCalendarEvents(tasks) {
  return tasks.map(task => {
    const priority = headers
      .find(section => section.name === 'PRIORITY')
      ?.children
      .find(child => child.name === task.priority);

    const due = new Date(task.dueDate);
    const end = new Date(due.getTime() + 30 * 60000);

    return {
      title: task.name,
      weekday: getDay(due),
      start: format(due, "HH:mm"),
      end: format(end, "HH:mm"),
      description: task.details,
      color: priority?.color
    };
  });
}