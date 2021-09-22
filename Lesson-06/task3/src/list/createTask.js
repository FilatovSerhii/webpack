import { renderTasks } from "./renderer.js";
import { getItem, setItem } from "./storage.js";
import { createTask, getTasksList } from "./tasksGateway.js";

export const onCreateTask = () => {
  const inputTaskElem = document.querySelector(".task-input");

  const text = inputTaskElem.value;

  if (!text) {
    return;
  }

  inputTaskElem.value = "";

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
  };

  createTask(newTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem("tasksList", newTasksList);
      renderTasks();
    });
};

// 1.Prepare data
// 2. Write data to database
// 3. Readnew data from server
// 4. Save new data to front-end storage
// 5. Updated UI based on new data
