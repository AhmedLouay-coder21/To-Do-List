import { CreateTasksTable } from "../components/Table";
import { ClearPageContent } from "../utils/clearPageContent";
import { upcomingTasksCount } from "../utils/taskCount";
export async function RenderUpcoming()
{
    ClearPageContent();

    const headerText = document.createElement('div');
    headerText.textContent = 'Upcoming';

    const headerCounter = document.createElement('div');
    headerCounter.textContent = upcomingTasksCount();

    const pageHeader = document.createElement('div');
    pageHeader.classList.add('page-header');
    pageHeader.appendChild(headerText);
    pageHeader.appendChild(headerCounter);
    document.getElementById('PageContent').appendChild(pageHeader);
    
    await CreateTasksTable('upcoming');
}