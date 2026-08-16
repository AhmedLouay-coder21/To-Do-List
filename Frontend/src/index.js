import "./styles.css";
import { CreateTasksTable } from './components/Table.js';
import { RenderSideBar } from './components/Sidebar.js';
import { GenericApiFetch } from './Api/Api.js';
import { themeToggle } from "./utils/themeToggle.js";

themeToggle();
CreateTasksTable();
RenderSideBar();