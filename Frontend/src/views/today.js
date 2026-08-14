import { CreateTasksTable } from "../components/Table";
import { ClearPageContent } from "../utils/clearPageContent";
import { todayTasksCount } from "../utils/taskCount";
export function RenderToday()
{
    ClearPageContent();
    const header = document.createElement('div');
    header.id = 'header';

    const headerText = document.createElement('div');
    headerText.textContent = 'Today';

    const headerCounter = document.createElement('div');
    headerCounter.textContent = todayTasksCount();

    header.appendChild(headerText);
    header.appendChild(headerCounter);

    document.getElementById('PageContent').appendChild(header);
    CreateTasksTable('today');
}