import { renderTasks } from "./renderer.js";
import { setItem } from "./storage.js";
import { deleteTask, getTasksList } from "./tasksGateway.js";

export const onListClick = (event) => {
  const deleteBtn = event.target.classList.contains("list-item__delete-btn");

  if (deleteBtn) {
    const taskId = event.target.dataset.id;

    deleteTask(`${taskId}`)
      .then(() => getTasksList())
      .then((newTasksList) => {
        setItem("tasksList", newTasksList);
        renderTasks();
      });
  }
};
