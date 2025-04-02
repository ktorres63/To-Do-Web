export default class Todo{
  constructor(title, description, dueDate, priority, notes="", checklist=[]){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.completed = false;
  }
  toggleComplete() {
    console.log('Antes de cambiar el estado: ', this.completed);
    this.completed = !this.completed;  // Cambia el estado de completado
    console.log('Después de cambiar el estado: ', this.completed);
  }
}