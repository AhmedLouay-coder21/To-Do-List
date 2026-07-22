import { data } from "browserslist";
import "./styles.css";
import Task from "./Task.js";
import CreateAllTasksTable from './Components/Table.js';

const newTask = new Task(1,"Programming", "High", "Program a video game", "2025-02-26" );
CreateAllTasksTable(newTask);