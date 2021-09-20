import { deleteTask, getTasksList } from './tasksGateway.js';
import { setItem } from './storage.js';
import { renderTasks } from './renderer.js';

export const onDeleteTask = (e) => {
  if (!e.target.matches('.list__item-delete-btn')) return;

  const { id } = e.target.parentElement.firstChild.dataset;

  deleteTask(id)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
