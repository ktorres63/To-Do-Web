export default class StorageService {
  constructor(storage){
    this.storage = storage;
  }
  getProjects(){
    return this.storage.getProjects();
  }
  saveProjects(projects){
    this.storage.saveProjects(projects);
  }
  addProject(project){
    this.storage.addProject(project);
  }
  removeProject(index){
    this.storage.removeProject(index);
  }
  getTasksForProject(index){
    return this.storage.getTasksForProject(index)
  }
  addTaskToProject(projectIndex, task){
    this.storage.addTaskToProject(projectIndex, task);
  }
  removeTaskToProject(projectIndex, taskIndex){
    this.storage.removeTaskToProject(projectIndex, taskIndex);
  }
  saveTasks(projectIndex, tasks){
    this.storage.saveTasks(projectIndex, tasks);
  }
}
