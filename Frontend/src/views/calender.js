import { Schedule , Calendar } from '@calendarjs/ce';
import '@calendarjs/ce/dist/style.css';
import { ClearPageContent } from '../utils/clearPageContent';
import { allTasksCount } from '../utils/taskCount';
import { ConvertTasksToCalendarEvents } from '../utils/dataConvert';
import { GenericApiFetch } from '../Api/Api';

const data = await GenericApiFetch();

export function RenderCalenderPage()
{
    ClearPageContent();
    RenderSchedule();
    RenderCalender();
}
export function RenderSchedule()
{
    const calendarEvents = ConvertTasksToCalendarEvents(data);

    const calendar = document.createElement('div');
    calendar.id = 'calender';

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

    const parentDiv = document.getElementById('calender').parentNode;
    parentDiv.insertBefore(output,calendar);

    Calendar(calendar, {
        type: 'inline',
        value: new Date(),
        onchange: function(self, value) {
            output.innerHTML = 'Selected: ' + value;
        }
    });
}