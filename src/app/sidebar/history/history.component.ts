import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(private todoService: TodoService, private datePipe: DatePipe) { }

  todoList: any;
  historyList = [];
  todayDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  loader:boolean = false;

  ngOnInit() {
    this.loader = true;
    this.getTodoList();
  }

  getTodoList() {
    this.todoService.getTodoList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe( (response) => {
      this.todoList = response;
      this.historyList = [];
      //Build history list
      let uniqueDate = [...new Set(this.todoList.map((todo) => this.datePipe.transform(todo.date, 'yyyy-MM-dd')))];
      for(let item of uniqueDate){
        if(item != this.todayDate) {
          let thisDayTask = this.todoList.filter((todo)=>{
            return item == this.datePipe.transform(todo.date, 'yyyy-MM-dd');
          });
          const newItem = {
            'date': item,
            'list': thisDayTask
          }
          this.historyList.push(newItem);
        }
      }
      this.loader = false;
    });
  }

  getProgress(historyList) {
    let list = historyList['list'];
    let completedItem = list.filter((item)=> !item.status)
    return this.todoService.getDayProgress(list.length, completedItem.length);
  }

}
