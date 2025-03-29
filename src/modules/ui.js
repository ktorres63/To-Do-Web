import Project from "./project.js";

export default class UI{
  constructor(storageService){
    this.storageService = storageService;
    this.projectList = document.getElementById("project-list");
    this.dialog = document.getElementById("project-dialog");
    this.openDialogBtn = document.getElementById("add-project");
    this.cancelBtn = document.getElementById("cancel-btn");
    this.form = this.dialog.querySelector("form");
    this.projectNameInput =  document.getElementById("project-name");
    
    this.setupEventListener();
    this.loadProjects();
  }
  setupEventListener(){
    this.openDialogBtn.addEventListener("click", (e)=>{
      e.preventDefault();
      this.dialog.showModal();
    });

    this.cancelBtn.addEventListener("click", () =>{
      this.dialog.close();
    });

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.addProject();
    });
  }
  addProject(){
    const projectName = this.projectNameInput.value.trim();
    if (projectName === "") return;

    const newProject = new Project(projectName);
    this.storageService.addProject(newProject);
    this.renderProject(newProject);
    this.projectNameInput.value = "";
    this.dialog.close();
  }

  renderProject(project){
    const newProjectDiv = document.createElement("div");
    newProjectDiv.classList.add("aside-link");
    newProjectDiv.innerHTML =  `<p>📌 ${project.name}</p>`;
    this.projectList.appendChild(newProjectDiv);
  }

  loadProjects(){
    const projects = this.storageService.getProjects();
    projects.forEach(project => this.renderProject(project));
  }
}
