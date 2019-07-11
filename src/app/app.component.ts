import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import "firebase/database";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'TodoAppAngular';
  toggleMenu:boolean = false;

  ngOnInit() {
    this.toggleMenu = (window.innerWidth > 1024) ? true : false;
  }

  toggleSidebar() {
    this.toggleMenu = !this.toggleMenu;
  }

}
