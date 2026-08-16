import { CreateTasksTable } from "../components/Table";
import { ClearPageContent } from "../utils/clearPageContent";
import { todayTasksCount } from "../utils/taskCount";
export async function RenderToday()
{
    ClearPageContent();

    const headerText = document.createElement('div');
    headerText.textContent = 'Today';

    const headerCounter = document.createElement('div');
    headerCounter.textContent = todayTasksCount();

    const pageHeader = document.createElement('div');
    pageHeader.classList.add('page-header');
    pageHeader.appendChild(headerText);
    pageHeader.appendChild(headerCounter);
    document.getElementById('PageContent').appendChild(pageHeader);

    await CreateTasksTable('today');
}