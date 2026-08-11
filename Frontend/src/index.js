import { data } from "browserslist";
import "./styles.css";
import { CreateAllTasksTable } from './Components/Table.js';
import { RenderSideBar } from './Components/Sidebar.js';
import { GenericApiFetch } from './Api/Api.js';

// async function Initialize() {
//     const allTasks = await GenericApiFetch();
//     CreateAllTasksTable(allTasks);
// }

// Initialize();
CreateAllTasksTable();
RenderSideBar();