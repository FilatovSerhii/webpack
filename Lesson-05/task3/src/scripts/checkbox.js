/* eslint-disable import/no-cycle */
/* eslint-disable no-restricted-syntax */
import { getItem, setItem, baseUrl } from './storage.js';
import { refreashList } from './tools.js';

function updateTask(userId, userData) {
  return fetch(`${baseUrl}/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  }).then(response => response.json());
}

function getTaskById(userId) {
  return fetch(`${baseUrl}/${userId}`).then(response => response.json());
}

function toggleTask(checkbox) {
  checkbox.parentElement.classList.toggle('list-item_done');
  const taskId = checkbox.parentElement.dataset.id;

  getTaskById(taskId).then(res => {
    updateTask(taskId, {
      id: res.id,
      date: Date.now(),
      text: res.text,
      done: !res.done,
    }).then(_ => {
      refreashList(getItem());
    });
  });
}

export const createCheckbox = done => {
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = done;
  checkbox.classList.add('list-item-checkbox');
  checkbox.addEventListener('click', event => toggleTask(event.target));

  return checkbox;
};
