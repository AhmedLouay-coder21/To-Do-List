import { data } from "browserslist";
import "./styles.css";
import { CreateTasksTable } from './components/Table.js';
import { RenderSideBar } from './components/Sidebar.js';
import { GenericApiFetch } from './Api/Api.js';

// async function Initialize() {
//     const allTasks = await GenericApiFetch();
//     CreateAllTasksTable(allTasks);
// }

// Initialize();
CreateTasksTable();
RenderSideBar();