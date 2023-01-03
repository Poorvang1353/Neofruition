import { Component } from '@angular/core';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  studentName = '';
  students: any = [];
  selectedStudent: any = "";
  setName(e: any) {
    this.studentName = e.target.value
  }
  addStudent() {
    this.students.push(this.studentName);
    this.studentName = '';
  }

  deleteStudent(i: any) {
    this.students.splice(i, 1);
  }

  selectStudent(i: any) {
    this.selectedStudent = i;
    this.studentName = this.students[i];
  }

  editStudent() {
    this.students[this.selectedStudent] = this.studentName;
    this.studentName = '';
    this.selectedStudent = "";
  }

}
