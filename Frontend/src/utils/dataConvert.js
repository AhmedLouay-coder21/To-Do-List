import { data } from "../data/data";
import { headers } from "../components/Sidebar";

export function ConvertTasksToCalendarEvents(tasks) {
  return tasks.map(task => {
    const priority = headers
      .find(section => section.name === 'PRIORITY')
      ?.children
      .find(child => child.name === task.priority);

    return {
      title: task.name,
      weekday: 'task.dueDate',
      start: task.dueDate,
      end: task.dueDate,
      description: task.details,
      color: priority?.color
    };
  });
}