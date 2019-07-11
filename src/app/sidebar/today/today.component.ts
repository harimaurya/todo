import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {

  constructor(private todoService: TodoService, private datePipe: DatePipe) { }

  todoList: any;
  todayDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  loader = false;
  progress = undefined;

  ngOnInit() {
    this.getTodoList();
    this.loader = true;
  }

  getTodoList() {
    this.todoService.getTodoList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe( (response) => {
      this.todoList = response.filter((item)=>{
        return this.todayDate == this.datePipe.transform(item.date, 'yyyy-MM-dd');
      });
      this.loader = false;
    });
  }

  getProgress() {
    let completedItem = this.todoList.filter((item)=> !item.status)
    return this.todoService.getDayProgress(this.todoList.length, completedItem.length);
  }

}
