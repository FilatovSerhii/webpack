import { initTodoListHandlers } from './todoList.js';
import { renderTasks } from './renderer.js';
import { getTasksList} from './tasksGateway.js'; // tasksGateway.js - это файл-прослойка для общения с сервером 
import {setItem} from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList()  // когда DOM готов сделаем чтение информации с базы данных 
    .then(tasksList => {       // в колбэке получим таскслист  getTasksList
      setItem('tasksList', tasksList); // запишем ключ 'tasksList' полученный с сервера список задач
      renderTasks(tasksList);
    });
  // renderTasks();
  initTodoListHandlers();
});

const onStorageChange = e => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};
window.addEventListener('storage', onStorageChange);



// Алгоритм для инициализации 
// 1. Get data from server 
// 2. Save data to front-end storage
// 3. 
