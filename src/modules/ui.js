import Project from "./project.js";
import Todo from "./todo.js";

import crossIcon from "../images/icon-cross.svg";

export default class UI {
  constructor(storageService) {
    this.storageService = storageService;
    this.projectList = document.getElementById("project-list");
    this.linkSelected = document.getElementById("link-selected");

    this.projectDialog = document.getElementById("project-dialog");
    this.addProjectBtn = document.getElementById("add-project");
    this.projectCancelBtn = document.getElementById("cancel-btn");
    this.projectForm = document.getElementById("project-form");
    this.projectNameInput = document.getElementById("project-name");

    this.asideLinks = document.querySelectorAll(".aside-link");

    this.taskTable = document.getElementById("table-body");

    this.taskDialog = document.getElementById("task-dialog");
    this.taskForm = document.getElementById("task-form");
    this.addTaskBtn = document.getElementById("add-task-btn");
    this.cancelTaskBtn = document.getElementById("cancel-task");

    this.selectedProjectIndex = null;

    this.setupEventListener();
    this.render();
  }
  setupEventListener() {
    this.addProjectBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.projectDialog.showModal();
    });

    this.projectCancelBtn.addEventListener("click", () => {
      this.projectDialog.close();
    });

    this.projectForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this.addProject();
    });

    this.projectList.addEventListener("click", (e) => {
      let targetElement = e.target;

      if (targetElement.tagName === "IMG") {
        targetElement = targetElement.closest(".delete-btn");
      }

      if (targetElement && targetElement.classList.contains("delete-btn")) {
        const index = targetElement.parentElement.dataset.index;
        this.removeProject(index);
        return;
      }

      const projectItem = e.target.closest(".project-item");
      if (projectItem) {
        const index = projectItem.dataset.index;
        this.displayProject(index);
      }
    });

    this.addTaskBtn.addEventListener("click", () => {
      if (this.selectedProjectIndex === null) {
        alert("Select a project first");
        return;
      }
      this.taskDialog.showModal();
    });
    this.cancelTaskBtn.addEventListener("click", () => {
      this.taskDialog.close();
    });
    this.taskForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this.addTask();
    });
  }
  addTask() {
    console.log("in addTASK");

    const title = document.getElementById("task-title").value.trim();
    const description = document.getElementById("task-desc").value.trim();
    const dueDate = document.getElementById("task-date").value;
    const priority = document.getElementById("task-priority").value;

    if (!title || !dueDate) return;

    const newTask = new Todo(title, description, dueDate, priority);
    this.storageService.addTaskToProject(this.selectedProjectIndex, newTask);

    this.renderTasks();
    this.taskForm.reset();
    this.taskDialog.close();
  }
  addProject() {
    const projectName = this.projectNameInput.value.trim();
    if (projectName === "") return;

    const newProject = new Project(projectName);
    this.storageService.addProject(newProject);

    this.render();
    this.projectNameInput.value = "";
    this.projectDialog.close();
  }
  renderTasks() {
    this.taskTable.innerHTML = "";
    if (this.selectedProjectIndex == null) return;
    const tasks = this.storageService.getTasksForProject(
      this.selectedProjectIndex
    );
    tasks.forEach((task) => {
      const row = document.createElement("div");
      row.classList.add("row");

      row.innerHTML = `
          <span class="round"></span>
          <div class="task">
              <span class="task-title">${task.title}</span>
              <span class="task-description">${task.description}</span>
          </div>
          <span>${task.date}</span>
          <span>${task.importance}</span>
          <span class="actions">
              <button class="delete-btn">
                  <img src=${crossIcon} />
              </button>
          </span>
      `;
      this.taskTable.appendChild(row);
    });
  }
  displayProject(index) {
    this.selectedProjectIndex = index;
    const projects = this.storageService.getProjects();
    const selectedProject = projects[index];

    if (!selectedProject) return;

    this.linkSelected.innerHTML = `📌 ${selectedProject.name}`;

    this.renderTasks();
  }

  displaySelectedLink(element) {
    const titleElement = element.querySelector("p");
    if (titleElement) {
      this.linkSelected.innerHTML = titleElement.innerHTML;
    }
  }

  render() {
    this.projectList.replaceChildren();
    const projects = this.storageService.getProjects();
    projects.forEach((project, index) => {
      const projectDiv = document.createElement("div");
      projectDiv.classList.add("aside-link", "project-item");

      projectDiv.dataset.index = index;
      projectDiv.innerHTML = ` 
      <p>📌 ${project.name}</p>
      <button class="delete-btn">
       <img src=${crossIcon} />
      </button>`;
      this.projectList.appendChild(projectDiv);
    });
  }
  removeProject(index) {
    this.storageService.removeProject(index);
    // Si se eliminó el proyecto seleccionado, reiniciar la selección
    if (this.selectedProjectIndex == index) {
      this.selectedProjectIndex = null;
      this.linkSelected.innerHTML = "📌 Select a project";
      this.taskTable.innerHTML = ""; // Limpia las tareas también
    }
    this.render();
  }
}
