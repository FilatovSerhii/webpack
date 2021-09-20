import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { getTasksList, updateTask } from './tasksGateway.js';

export const onToggleTask = (e) => {
  const isCheckbox = e.target.classList.contains('list-tem__checkbox');

  if (!isCheckbox) {
    return;
  }

  const taskId = e.target.dataset.id; // taskId получаем из дэйтаатрибутов  e.target.dataset.id
  const tasksList = getItem('tasksList');
  const {text, createDate} = tasksList
    .find(task => task.id === taskId);
  const done = e.target.checked;
  
  const updatedTask = {// генерируем updatedTaskData
    text,
    createDate,
    done,
    finishDate: done 
                  ? new Date().toISOString() 
                  : null,
  };

  updateTask(taskId, updatedTask) // какую задачу обновить (taskId) и новые данные для этой задачи (updatedTask)
    .then(()=> getTasksList())
    .then(newTasksList => {
        setItem('tasksLists', newTasksList);
        renderTasks();
    });
};


// Алгоритм 
// 1. Prepare data  - подготовить данные
// 2. Update data in db - обновить данные в базе данных
// 3. Read new data from server - после записи данных на сервер  эти данные считать (хорошая практика)
// 4. Save new data to front-end storage- новые данные сохраняем в хранилище на клиенте, т.е. в браузере скоторыми (речь о данных) уже в последствии рабоотает основное приложение
// 5. Update UI based on new data - как-то используем эти новые данные 
