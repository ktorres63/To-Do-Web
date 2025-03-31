import Project from "./project.js";
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
    
    this.selectedProjectIndex = null;
    
    
    this.taskTable = document.getElementById("table-body")


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
  displayProject(index) {
    this.selectedProjectIndex = index;
    const projects = this.storageService.getProjects();
    const selectedProject = projects[index];

    if (!selectedProject) return;
    const tasks = this.storageService.getTasksForProject(index);

    this.linkSelected.innerHTML = `📌 ${selectedProject.name}`;
    
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = "";

    tasks.forEach((task) =>{
      const row = document.createElement("div");
      row.classList.add("row")

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
      tableBody.appendChild(row);

    })
    
    
    console.log(tasks);
  }

  displaySelectedLink(element) {
    const titleElement = element.querySelector("p");
    if (titleElement) {
      this.linkSelected.innerHTML = titleElement.innerHTML;
    }
  }

  render() {
    this.projectList.innerHTML = "";
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
    this.render();
  }
}
