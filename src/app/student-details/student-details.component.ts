import { Component, OnInit } from '@angular/core';
import { StudServiceService } from '../stud-service.service';
import { Stud } from '../student/stud-list/stud.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent{
  
  allStudents:Stud[]=[];

  constructor(private studService:StudServiceService){

  }

  ngOnInit(): void{
    this.studService.getAllStudents()
    .subscribe((data)=>this.allStudents=data);
  }


}
