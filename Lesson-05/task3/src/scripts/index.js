/* eslint-disable import/named */
import { getItem } from './storage.js';
import { createTask } from './createTask.js';
import { renderTasks } from './todoList.js';

renderTasks(getItem());
