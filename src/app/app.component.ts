import { Component, OnInit } from '@angular/core';
import { StudentComponent } from './student/student.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  
  constructor() {}

  ngOnInit(): void {
  }

  addName(name: string, student: StudentComponent) {
    student.addName(name);
  }
}
