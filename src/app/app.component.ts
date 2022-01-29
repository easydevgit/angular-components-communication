import { Component } from '@angular/core';
import { Student } from './models';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  students: Student[];

  constructor(private studentService: StudentService) {
    this.students = studentService.getStudents();
  }

  addName(name: string) {
    this.studentService.addName(name);
    this.students = this.studentService.getStudents();
  }
}
