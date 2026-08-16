import { Schedule, Calendar } from '@calendarjs/ce';
import '@calendarjs/ce/dist/style.css';
import { ClearPageContent } from '../utils/clearPageContent';
import { allTasksCount } from '../utils/taskCount';
import { ConvertTasksToCalendarEvents } from '../utils/dataConvert';
import { GenericApiFetch } from '../Api/Api';

export async function RenderCalenderPage()
{
    ClearPageContent();
    await RenderSchedule();
    RenderCalender();
}

export async function RenderSchedule()
{
    const data = await GenericApiFetch();
    const calendarEvents = ConvertTasksToCalendarEvents(data);

    const pageHeader = document.createElement('div');
    pageHeader.classList.add('page-header');

    const headerText = document.createElement('div');
    headerText.textContent = 'Calender';

    const headerCounter = document.createElement('div');
    headerCounter.textContent = allTasksCount();

    pageHeader.appendChild(headerText);
    pageHeader.appendChild(headerCounter);
    document.getElementById('PageContent').appendChild(pageHeader);

    const calendar = document.createElement('div');
    calendar.id = 'calender';

    const schedule = document.createElement('div');
    schedule.id = 'schedule';
    calendar.appendChild(schedule);
    document.getElementById('PageContent').appendChild(calendar);

    Schedule(schedule, {
        type: 'week',
        weekly: false,
        data: calendarEvents
    });
}

export function RenderCalender()
{
    const calendar = document.getElementById('calender');

    const output = document.createElement('div');
    output.id = 'output';

    calendar.parentNode.insertBefore(output, calendar);

    Calendar(calendar, {
        type: 'inline',
        value: new Date(),
        onchange: function(self, value) {
            output.innerHTML = 'Selected: ' + value;
        }
    });
}