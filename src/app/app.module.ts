import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbTabsetModule, NgbButtonsModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TodoHeaderComponent } from './sidebar/todo-header/todo-header.component';
import { TodayComponent } from './sidebar/today/today.component';
import { HistoryComponent } from './sidebar/history/history.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { TodoService } from './services/todo.service';
import { TodoItemComponent } from './sidebar/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { ThoughtOfDayComponent } from './sidebar/thought-of-day/thought-of-day.component';
import { DatePipe } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    SidebarComponent,
    TodoHeaderComponent,
    TodayComponent,
    HistoryComponent,
    TodoItemComponent,
    ThoughtOfDayComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbTabsetModule,
    NgbButtonsModule,
    AngularFireModule.initializeApp(environment.firebase, 'ToDo-App'),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [TodoService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
