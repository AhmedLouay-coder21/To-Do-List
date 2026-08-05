import { data } from "browserslist";
import "./styles.css";
import CreateAllTasksTable from './Components/Table.js';
import { GenericApiFetch } from './Api/Api.js';

async function Initialize() {
    const allTasks = await GenericApiFetch();
    CreateAllTasksTable(allTasks);
}

Initialize();