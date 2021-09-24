import { renderTasks } from './todoList.js';

export function refreashList(tasks) {
  const listElem = document.querySelector('.list');
  listElem.innerHTML = '';

  renderTasks(tasks);
}
