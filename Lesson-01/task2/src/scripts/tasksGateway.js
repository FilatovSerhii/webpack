const baseUrl = 'https://6141db7d4d16670017ba29f9.mockapi.io/api/v1/tasks';

const mapTasks = tasks => 
  tasks.map(({_id, ...rest}) => ({...rest, id: _id}));

export const getTasksList = () =>   // этот метод не принимает параметры, надо просто получить все задачи которые есть в моей базе данных
  fetch(baseUrl)              // воспользуемся методом fetch, что бы вернуть промис ; метод fetch работает в два этапа 
  .then((response) => response.json()) // подписываемся на промис, обрабатываем запрос и вызываем  на нем метод json, так мы получим масив задач которые храняться на сервере 
  .then(tasks => mapTasks(tasks))

export const createTask = (
  taskData // метод createTas принимает аргумент(объект задачи)
) =>
  fetch(baseUrl, {
    // здесь делаем запрос на наш baseUrl
    method: 'POST', // здесь создаеться элемент в базе данных, чтобы создать используем метод 'POST'
    headers: {
      // когда постим данные на сервер нужно указать какие именно данные и в каком виде мы это делаем, это мы можем сделать в headers
      'Content-Type': 'application/json;charset=utf-8', // что бы сказать какие данные мы пытаемся записать на сервер используем 'Content-Type', и у нас json по этому 'Content-Type' должен быть application/json, так же можно указать кодировку в которой мы сейчас работаем charset=utf-8
    },
    body: JSON.stringify(taskData), // последним параметром нам нужно указать тело запроса, т.е.данные которые мы будем туда отправлять, надо помнить что данные по сети "ходят в виде строк" а не объектов которые мы используем в JS, по этому приводим объект к JSON строке методом JSON.stringify
  });


export const updateTask = (taskId, updatedTaskData) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(updatedTaskData),
  });

export const deleteTask = (taskId) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });
