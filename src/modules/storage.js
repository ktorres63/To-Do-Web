import { roundToNearestMinutes } from "date-fns";

export default class Storage{
  static getProjects(){
    return JSON.parse(localStorage.getItem("projects")) || []
  }

  static saveProjects(projects){
    localStorage.setItem("projects", JSON.stringify(projects))
  }
  static addProject(project){
    const projects = this.getProjects();
    projects.push(project)
    this.saveProjects(projects)
  }
  static removeProject(index){
    let projects = this.getProjects();
    if(index >= 0 && index < projects.length){
      projects.splice(index,1);
      this.saveProjects(projects)
    }
  }
  static addTaskToProject(projectIndex, task){
    const projects = this.getProjects();
    projects[projectIndex].todos.push(task);
    this.saveProjects(projects);
  }

  static getTasksForProject(projectIndex){
    const projects = this.getProjects();
    return projects[projectIndex]?.todos || []

  }
  static removeTaskToProject(projectIndex, taskIndex){
    const projects = this.getProjects();
    projects[projectIndex].todos.splice(taskIndex,1);
    this.saveProjects(projects)
  }
}