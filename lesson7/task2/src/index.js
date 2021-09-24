/* eslint-disable import/named */
import { getItem } from './list/storage.js';
import { createTask } from './list/createTask.js';
import { renderTasks } from './list/todoList.js';
import './index.scss';

renderTasks(getItem());
