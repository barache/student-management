import { Injectable } from '@angular/core';
import {Student} from "../models/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [
    new Student(1, 'John', 'Doe', 1234567890, 'john@example.com'),
    new Student(2, 'Jane', 'Smith', 9876543210, 'jane@example.com')
  ];

  getStudents(): Student[] {
    return this.students;
  }

  getStudent(id: number): Student | undefined {
    return this.students.find(student => student.id === id);
  }

  addStudent(student: Student) {
    this.students.push(student);
  }

  updateStudent(updatedStudent: Student) {
    const index = this.students.findIndex(student => student.id === updatedStudent.id);
    if (index !== -1) {
      this.students[index] = updatedStudent;
    }
  }

  deleteStudent(id: number) {
    this.students = this.students.filter(student => student.id !== id);
  }
}
