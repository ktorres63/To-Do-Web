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
  static removeProject(name){
    let projects = this.getProjects();
    projects = projects.filter( project => project.name !== name);
    this.saveProjects();
  }
}