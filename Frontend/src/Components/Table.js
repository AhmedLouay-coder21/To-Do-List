import {
  constructTable,
  tableFeatures,
} from '@tanstack/table-core'
import { FlexRender } from '@tanstack/table-core/flex-render'
import { storeReactivityBindings } from '@tanstack/table-core/store-reactivity-bindings'
import { data as Mockdata } from '../data/data'
import { GenericApiFetch } from '../Api/Api'
const features = tableFeatures({
  coreReactivityFeature: storeReactivityBindings(),
})
const isMockData = false;
let data;
if (isMockData)
{
    data = Mockdata;
}
else
{
    data = await GenericApiFetch();
}

export function CreateAllTasksTable()
{
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
    },
    {
        accessorKey: "dueDate",
        header: "Due date",
    },
        {
        accessorKey: "daysSinceCreation",
        header: "Days since creation",
    },
    ];

    const table = constructTable({
    features,
    columns,
    data,
    })

    const app = document.getElementById('app')

    if (!app) {
    throw new Error('Missing #app element')
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

        row.getAllCells().forEach((cell) => {
        const td = document.createElement('td')
        td.innerHTML = String(FlexRender({ cell }) ?? '')
        tr.appendChild(td)
        })

        tbody.appendChild(tr)
    })

    tableElement.appendChild(thead)
    tableElement.appendChild(tbody)

    app.replaceChildren(tableElement)
    }

    table.store.subscribe(() => renderTable())
    renderTable()
}