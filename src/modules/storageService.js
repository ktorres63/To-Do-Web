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
  removeProject(name){
    this.storage.removeProject(name);
  }





}
