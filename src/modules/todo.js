export default class Todo {
  constructor(
    title,
    description,
    dueDate,
    priority,
  ) {
    this.id = this.generateId(); 
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }
  toggleComplete() {
    console.log("Antes de cambiar el estado: ", this.completed);
    this.completed = !this.completed; // Cambia el estado de completado
    console.log("Después de cambiar el estado: ", this.completed);
  }
  generateId(){
    return '_' + Math.random().toString(36).substr(2, 9);
  }
}
