import "core-js/modules/web.dom-collections.iterator.js";
import "core-js/modules/es.array.reverse.js";
import "core-js/modules/es.array.sort.js";

/* eslint-disable import/no-cycle */
import { createCheckbox } from './checkbox.js';
import { createDeleteBtn } from './createTask.js';
const listElem = document.querySelector('.list');

const createListItems = taskList => taskList.map(_ref => {
  let {
    text,
    done,
    id
  } = _ref;
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list-item', 'list__item');
  listItemElem.setAttribute('data-id', id);

  if (done) {
    listItemElem.classList.add('list-item_done');
  }

  const textElem = document.createElement('span');
  textElem.classList.add('list-item__text');
  textElem.textContent = text;
  listItemElem.append(createCheckbox(done), textElem, createDeleteBtn());
  return listItemElem;
});

export function renderTasks(tasksList) {
  tasksList.then(res => {
    listElem.append(...createListItems([...res.filter(task => task.done === false).reverse(), ...res.filter(task => task.done === true).sort((a, b) => b.date - a.date)]));
  });
}