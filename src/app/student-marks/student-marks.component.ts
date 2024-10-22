import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StudServiceService } from '../stud-service.service';
import { Stud } from '../student/stud-list/stud.model';

@Component({
  selector: 'app-student-marks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-marks.component.html',
  styleUrl: './student-marks.component.css'
})
export class StudentMarksComponent {
  
  allStudents:Stud[]=[];

  constructor(private studservice:StudServiceService) {

  }

  ngOnInit(): void{
    this.studservice.getAllStudents()
    .subscribe((data)=>this.allStudents = data);
  }

}
