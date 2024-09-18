import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';
import {Student} from "../models/student";

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent {
  newStudent: Student = new Student(0, '', '', 0, '');

  constructor(private studentService: StudentService) {}

  addStudent() {
    this.studentService.addStudent(this.newStudent);
    this.newStudent = new Student(0, '', '', 0, '');
  }
}
