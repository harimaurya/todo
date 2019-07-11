import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../services/todo.sdo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  todoItem:Todo = new Todo();

  constructor(private todoService: TodoService) { 
  }

  ngOnInit() {
  }

  addTodo() {
    this.todoService.addTodo(this.todoItem);
    this.todoItem = new Todo();
  }

  isDisabled(ele) {
    return ele.invalid;
  }

}
