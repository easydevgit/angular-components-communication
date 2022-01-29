import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './models';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  students$: Observable<Student[]>;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.students$ = this.studentService.students;
  }

  addName(name: string) {
    this.studentService.addName(name);
  }
}
