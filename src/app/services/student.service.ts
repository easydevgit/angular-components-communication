import { Injectable } from '@angular/core';
import { Student } from '../models';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

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

  getStudents(): Student[] {
    return [...this.students]
  }
}
