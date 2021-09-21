import { renderTasks } from './renderer.js';
import { deleteTask, getTasksList } from "./tasksGateway.js";
import { setItem } from './storage.js';

export const onCloseBtn = e => {
  const isCloseBtn = e.target.classList.contains('list-item__delete-btn');
  if (!isCloseBtn) {
    return;
  }

  const elem = e.target.parentNode.firstChild;
  const taskId = elem.dataset.id;
  deleteTask(taskId)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
