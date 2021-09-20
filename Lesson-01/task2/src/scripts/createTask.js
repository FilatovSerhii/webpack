import { renderTasks } from './renderer.js';
import { setItem } from './storage.js';
import { createTask, getTasksList } from './tasksGateway.js';

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');

  const text = taskTitleInputElem.value;

  if (!text) return;

  taskTitleInputElem.value = '';

  // 1. Prepare data
  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
  };

  createTask(newTask) // 2. Write data to Data Base
    .then(() => getTasksList()) // 3. Read new data from server - для того что бы считать новые обновленные данные мы подпишимся на завершение этого промиса и здесь мы считаем данные с сервера и для этого у нас есть метод получить все задачи -
    .then((newTasksList) => {
      // дальше когда мы получили все задачи, мы ожем обновленные задачи записать в наше локальное хранилище
      setItem('tasksList', newTasksList); // записывам задачи local storedg, если какая-то локальная вкладка открыта то у нас есть механизм который обновит эти задачи в другой вкладке
      renderTasks(); // renderTasks - он ориентируеться на наше локальное хранилище и от туда отрисовывает наш список
    });

  // setItem('tasksList', newTasksList); - не нужно т.к. выполнели эти операции в колбэке промисов
  // renderTasks(); эту строку перенесли в промис createTask(newTask) для коректной работы, иначе renderTasks() выполниться сразу после работы createTask(newTask) и не даждеться пока мы запишем данные на сервер или пока их отрисуем
};

// порядок действий когда мы записываем какую либо информацию в базу данных
// 1. Prepare data - подготовили данные
// 2. Write data to Data Base- записать эти данные в базу данных  
// 3. Read new data from server - после записи данных на сервер  эти данные считать (хорошая практика)
// 4. Save new data to front-end storage- новые данные сохраняем в хранилище на клиенте, т.е. в браузере скоторыми (речь о данных) уже в последствии рабоотает основное приложение
// 5. Update UI based on new data - как-то используем эти новые данные
