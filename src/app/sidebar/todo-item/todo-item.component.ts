import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/services/todo.sdo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input('todo') todoItem:Todo = null;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  deleteTodo() {
    this.todoService.deleteTodo(this.todoItem.key).catch((error)=>{
      console.log(error);
    })
  }

  updateTodo() {
    const updateValue = {
      status: !this.todoItem.status
    }
    this.todoService.updateTodo(this.todoItem.key, updateValue).catch((error) => {
      console.log(error);
    })
  }

}
