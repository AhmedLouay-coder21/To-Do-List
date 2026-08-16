import {
  constructTable,
  tableFeatures,
  rowSelectionFeature,
} from '@tanstack/table-core'
import { FlexRender } from '@tanstack/table-core/flex-render'
import { storeReactivityBindings } from '@tanstack/table-core/store-reactivity-bindings'
import { GenericApiFetch } from '../Api/Api'
import { format, isFuture, isToday } from 'date-fns'
import { changeDateFormat } from '../utils/dateUtils'

const features = tableFeatures({
  coreReactivityFeature: storeReactivityBindings(),
  rowSelectionFeature,
})

export async function CreateTasksTable(tasksType = 'all')
{
    const data = await GenericApiFetch();
    let tableData;

    if(tasksType == 'today')
    {
        tableData = data.filter(task => isToday(task.dueDate));
    }
    else if(tasksType == 'upcoming')
    {
        tableData = data.filter(task => isFuture(task.dueDate));
    }
    else if (tasksType == 'all')
    {
        tableData = data;
    }
    else
    {
        tableData = data.filter(task => task.priority == tasksType);
    }

    if(tableData.length == 0)
    {
        const empty = document.createElement('div');
        empty.classList.add('empty-state');
        empty.textContent = 'No tasks here.';
        document.getElementById('PageContent').appendChild(empty);
        return;
    }

    const columns = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "priority",
        header: "Priority",
    },
    {
        accessorKey: "details",
        header: "Details",
    },
    {
        accessorKey: "creationDate",
        header: "Creation date",
        cell: ({ getValue }) => {
            return format(new Date(getValue()), "yyyy-MM-dd E HH:mm");
        },
    },
    {
        accessorKey: "dueDate",
        header: "Due date",
        cell: ({ getValue }) => {
            return format(new Date(getValue()), "yyyy-MM-dd E HH:mm");
        },
    },
    {
        accessorKey: "daysSinceCreation",
        header: "Days since creation",
    },
    ];

    const table = constructTable({
    features,
    columns,
    data: tableData,
    })

    const TaskTable = document.createElement('div');
    TaskTable.id = 'tasks-table';

    if (!TaskTable) {
    throw new Error('Missing #TaskTable element')
    }

    const renderTable = () => {
    const tableElement = document.createElement('table')
    const thead = document.createElement('thead')
    const tbody = document.createElement('tbody')

    table.getHeaderGroups().forEach((headerGroup) => {
        const tr = document.createElement('tr')
        headerGroup.headers.forEach((header) => {
        const th = document.createElement('th')
        th.innerHTML = header.isPlaceholder
            ? ''
            : String(FlexRender({ header }) ?? '')
        tr.appendChild(th)
        })
        thead.appendChild(tr)
    })
    table.getRowModel().rows.forEach((row) => {
        const tr = document.createElement('tr')
        tr.classList.add("Task");
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = row.getIsSelected();

        checkbox.addEventListener('change', () => {
            row.toggleSelected();
        });
        tr.addEventListener('click', () => {
            row.toggleSelected();
        });

        const checkboxTd = document.createElement('td');
        checkboxTd.appendChild(checkbox);
        tr.appendChild(checkboxTd);
        row.getAllCells().forEach((cell) => {
        const td = document.createElement('td')
        td.innerHTML = String(FlexRender({ cell }) ?? '')
        tr.appendChild(td)
        })

        tbody.appendChild(tr)
    })

    tableElement.appendChild(thead)
    tableElement.appendChild(tbody)

    TaskTable.replaceChildren(tableElement)
    document.getElementById('PageContent').appendChild(TaskTable);
    }

    table.store.subscribe(() => renderTable())
    renderTable()
}