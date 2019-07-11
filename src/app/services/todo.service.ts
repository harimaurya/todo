import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Todo } from './todo.sdo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private refPath = '/todoList';
  todoList: AngularFireList<Todo> = null;

  constructor(private db: AngularFireDatabase) { 
    this.todoList = db.list(this.refPath);
  }

  addTodo(todoItem: Todo): void {
    this.todoList.push(todoItem);
  }

  updateTodo(key: string, value: any): Promise<void> {
    return this.todoList.update(key, value);
  }
 
  deleteTodo(key: string): Promise<void> {
    return this.todoList.remove(key);
  }
 
  getTodoList(): AngularFireList<Todo> {
    return this.todoList;
  }

  getDayProgress(totalItem:number, totalCompleted:number) {
    let percentage = (totalCompleted/totalItem) * 100;
    return Math.round(percentage);
  }
 
}
