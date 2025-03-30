import Project from "./project.js";
import crossIcon from "../images/icon-cross.svg"

export default class UI {
  constructor(storageService) {
    this.storageService = storageService;
    this.projectList = document.getElementById("project-list");
    this.dialog = document.getElementById("project-dialog");
    this.openDialogBtn = document.getElementById("add-project");
    this.cancelBtn = document.getElementById("cancel-btn");
    this.form = this.dialog.querySelector("form");
    this.projectNameInput = document.getElementById("project-name");

    this.setupEventListener();
    this.loadProjects();
  }
  setupEventListener() {
    this.openDialogBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.dialog.showModal();
    });

    this.cancelBtn.addEventListener("click", () => {
      this.dialog.close();
    });

    this.form.addEventListener("submit", (e) => {
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
        console.log(index);
        this.removeProject(index);
      }
    });
    
  }
  addProject() {
    const projectName = this.projectNameInput.value.trim();
    if (projectName === "") return;

    const newProject = new Project(projectName);
    this.storageService.addProject(newProject);

    this.renderProjects();
    this.projectNameInput.value = "";
    this.dialog.close();
  }

  renderProjects() {
    this.projectList.innerHTML = "";
    const projects = this.storageService.getProjects();
    projects.forEach((project, index) =>{
      const projectDiv = document.createElement("div");
      projectDiv.classList.add("aside-link");
      projectDiv.classList.add("project-item");

      projectDiv.dataset.index = index
      projectDiv.innerHTML = ` 
      <p>📌 ${project.name}</p>
      <button class="delete-btn">
       <img src=${crossIcon} />
      </button>`;
      this.projectList.appendChild(projectDiv);

    })

  }
  removeProject(index){
    this.storageService.removeProject(index);
    this.renderProjects();
  }

  loadProjects() {
   this.renderProjects();
  }
}
