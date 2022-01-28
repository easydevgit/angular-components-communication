import { Component } from '@angular/core';
import { Student } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  students: Student[] = [
    { id: 1, name: 'Ivan' },
    { id: 2, name: 'Bill' },
    { id: 3, name: 'John' },
    { id: 4, name: 'Petr' },
  ];

  addName(name: string) {
    this.students.push({
      name: name,
      id: this.students.length + 1,
    });
  }
}
