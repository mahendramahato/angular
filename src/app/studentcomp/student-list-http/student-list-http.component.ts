import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StudentHttpService } from '../../student/student-http.service';
import { Stud } from '../../student/stud-list/stud.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list-http',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list-http.component.html',
  styleUrl: './student-list-http.component.css'
})
export class StudentListHttpComponent {

  allStud:Stud[]=[];
  constructor(private studentHttpService :StudentHttpService,
    private router: Router
  ){}

  loadData(){
    this.studentHttpService.getAllStudents()
    .subscribe((data)=>this.allStud=data);
  }

  ngOnInit(): void{
    this.loadData();
  }

  getAStudent(id:number){
    this.router.navigate(['studentview', id])
  }

  deleteStudent(id:number){
    this.studentHttpService.delete(id).subscribe(
      ()=>this.loadData()
    )
  }

}
