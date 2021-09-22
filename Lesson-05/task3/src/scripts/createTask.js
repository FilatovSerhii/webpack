/* eslint-disable import/no-cycle */
import { getItem, setItem, baseUrl } from './storage.js';
import { refreashList } from './tools.js';

export function createTask() {
  const inputElem = document.querySelector('.task-input');
  if (!inputElem.value) {
    return null;
  }

  setItem({
    // id: Math.random().toString(),
    date: Date.now(),
    text: inputElem.value,
    done: false,
  }).then(_ => {
    inputElem.value = '';
    refreashList(getItem());
  });

  return undefined;
}

function deleteTask(userId) {
  return fetch(`${baseUrl}/${userId}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .then(_ => refreashList(getItem()));
}

export function createDeleteBtn() {
  const deleteBtnElem = document.createElement('button');
  deleteBtnElem.classList.add('list-item__delete-btn');
  deleteBtnElem.addEventListener('click', () => deleteTask(deleteBtnElem.parentElement.dataset.id));
  return deleteBtnElem;
}

const btnCreate = document.querySelector('.create-task-btn');
btnCreate.addEventListener('click', createTask);
