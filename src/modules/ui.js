import Project from "./project.js";
import Todo from "./todo.js";
import { isToday, parseISO } from 'date-fns';
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
    this.deleteButtons = this.taskTable.querySelectorAll(".delete-btn");
    this.selectedProjectIndex = null;

    // Filters:
    this.todayFilter = document.getElementById("today")
    this.nextSevenFilter = document.getElementById("next7")
    this.AllTaskFilter = document.getElementById("allTask")
    this.hightImportanceFilter = document.getElementById("importance-high")
    this.mediumImportanceFilter = document.getElementById("importance-medium")
    this.lowImportanceFilter = document.getElementById("importance-low")

    this.setupEventListener();
    this.render();
  }
  
  setupEventListener() {
    this.addProjectBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.projectDialog.showModal();
    });
    this.todayFilter.addEventListener("click", ()=>{
      this.showTodayTasks();
      console.log("press Today");
    })

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
        this.addTaskBtn.classList.remove("hidden")
        const index = projectItem.dataset.index;
        this.displayProject(index);
        console.log("slected a item")
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

    this.taskTable.addEventListener("click", (e) => {
      const round = e.target.closest(".round");
      if (!round) return;

      const taskRow = round.closest(".row");
      if (!taskRow) return;

      if (e.target.classList.contains("round")) {
        const taskId = e.target.dataset.id;
        this.toggleTaskComplete(taskId);
      }
    });

    this.taskTable.addEventListener("click", (e) => {
      const deleteBtn = e.target.closest(".delete-btn");
      if (!deleteBtn) return;

      const index = deleteBtn.dataset.index;
      this.deleteTask(index);
    });
  }
  getAllTasksFromAllProjects(){
    const projects = this.storageService.getProjects();
    return projects.flatMap(project => project.todos);
  }
  deleteTask(index) {
    this.storageService.removeTaskToProject(this.selectedProjectIndex, index);
    this.renderTasks();
  }
  showTodayTasks(){
    this.linkSelected.innerHTML = `📅 Today`;
    this.selectedProjectIndex = null;
    const todayTasks = this.getAllTasksFromAllProjects().filter(task => isToday(parseISO(task.dueDate))) 
    console.log(`today tasks ${todayTasks[0]}`);
    this.renderTasks(todayTasks)
  }

  toggleTaskComplete(taskId) {
    const projects = this.storageService.getProjects();

    for(let i = 0; i< projects.length; i++){
      const tasks = projects[i].todos;
      const taskIndex = tasks.findIndex(task => task.id === taskId)
      
      if(taskIndex != -1){
        tasks[taskIndex].completed =!tasks[taskIndex].completed
        this.storageService.saveProjects(projects)
        
        if (this.selectedProjectIndex === null) {
          this.showTodayTasks(); 
        } else {
          this.renderTasks();
        }
        return;
      }
    }

  }

  addTask() {
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
  renderTasks(tasks = null) {
    this.taskTable.innerHTML = "";
  
    if (!tasks) {
      if (this.selectedProjectIndex == null) return;
      tasks = this.storageService.getTasksForProject(this.selectedProjectIndex);
    }
  
    tasks.forEach((task, index) => {
      const row = document.createElement("div");
      row.classList.add("row");
      row.innerHTML = `
        <span class="round ${task.completed ? "checked" : ""}" data-id="${task.id}"></span>
        <div class="task ${task.completed ? "completed" : ""}">
          <span class="task-title">${task.title}</span>
          <span class="task-description">${task.description}</span>
        </div>
        <span>${task.dueDate}</span>
        <span>${task.priority}</span>
        <span class="actions">
          <button class="delete-btn" data-id="${task.id}">
            <img src=${crossIcon} />
          </button>
        </span>
      `;
      this.taskTable.appendChild(row);
    });
    this.addTaskBtn.classList.toggle("hidden", this.selectedProjectIndex === null);

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
    if (this.selectedProjectIndex == index) {
      this.selectedProjectIndex = null;
      this.linkSelected.innerHTML = "📌 Select a project";
      this.taskTable.innerHTML = "";
    }
    this.render();
  }
}
