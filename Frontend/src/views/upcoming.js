import { CreateTasksTable } from "../components/Table";
import { ClearPageContent } from "../utils/clearPageContent";
import { upcomingTasksCount } from "../utils/taskCount";
export function RenderUpcoming()
{
    ClearPageContent();
    const header = document.createElement('div');
    header.id = 'header';

    const headerText = document.createElement('div');
    headerText.textContent = 'Upcoming';

    const headerCounter = document.createElement('div');
    headerCounter.textContent = upcomingTasksCount();

    header.appendChild(headerText);
    header.appendChild(headerCounter);
    
    document.getElementById('PageContent').appendChild(header);
    CreateTasksTable('upcoming');
}