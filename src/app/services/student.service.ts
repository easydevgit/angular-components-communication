import { Injectable } from '@angular/core';
import { Student } from '../models';
import { BehaviorSubject, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}

  students: BehaviorSubject<Student[]> = new BehaviorSubject<Student[]>([
    { id: 1, name: 'Ivan' },
    { id: 2, name: 'Bill' },
    { id: 3, name: 'John' },
    { id: 4, name: 'Petr' },
  ]);

  students$: Observable<Student[]> = this.students.asObservable();

  addName(name: string) {
    this.students$.pipe(take(1)).subscribe((val) => {
      let studentsLenght = 0;
      this.students$.subscribe((students) => {
        studentsLenght = students.length;
      });
      const newStudent = {
        name: name,
        id: studentsLenght + 1,
      };

      const newStudentsArray = [...val, newStudent];
      this.students.next(newStudentsArray);
    });
  }
}
