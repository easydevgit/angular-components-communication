import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../models';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  students: Student[] = [
    { id: 1, name: 'Ivan' },
    { id: 2, name: 'Bill' },
    { id: 3, name: 'John' },
    { id: 4, name: 'Petr1' },
  ];

  constructor() {}

  ngOnInit(): void {}

  addName(name: string) {
    this.students.push({
      name: name,
      id: this.students.length + 1,
    });
  }
}
