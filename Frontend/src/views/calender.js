import { Schedule } from '@calendarjs/ce';
import '@calendarjs/ce/dist/style.css';
import { data } from '../data/data';
import { ClearPageContent } from '../utils/clearPageContent';
import { allTasksCount } from '../utils/taskCount';
import { ConvertTasksToCalendarEvents } from '../utils/dataConvert';

export function RenderCalender()
{
    const calendarEvents = ConvertTasksToCalendarEvents(data);

    ClearPageContent();
    const header = document.createElement('div');
    header.id = 'header';

    const headerText = document.createElement('div');
    headerText.textContent = 'Calender';

    const headerCounter = document.createElement('div');
    headerCounter.textContent = allTasksCount();

    header.appendChild(headerText);
    header.appendChild(headerCounter);
    document.getElementById('PageContent').appendChild(header);

    const schedule = document.createElement('div');
    schedule.id = 'schedule';
    document.getElementById('PageContent').appendChild(schedule);
    Schedule(schedule, {
    type: 'week',
    weekly: false,
    data: calendarEvents
    });

}