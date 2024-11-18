import { Component } from '@angular/core';
import { Stud } from '../../student/stud-list/stud.model';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentHttpService } from '../../student/student-http.service';

@Component({
  selector: 'app-student-view-http',
  standalone: true,
  imports: [],
  templateUrl: './student-view-http.component.html',
  styleUrl: './student-view-http.component.css'
})
export class StudentViewHttpComponent {

  fetchedStudent : Stud={
    id:0,
    studName: '',
    studTotalMarks: 0,
    studDob: new Date(),
    studGender: ''
  }

  constructor(private activatedRoute:ActivatedRoute, 
    private studentHttpService:StudentHttpService,
    private router:Router
  ){}

  ngOnInit(): void {
    let studId = this.activatedRoute.snapshot.paramMap.get('sid');
    if(studId != null) {
      this.studentHttpService.getAStudent(+studId).subscribe({
        next:(response)=>this.fetchedStudent = response,
        error:(err)=> console.log(err)
      })
    }
  }

  back(){
    this.router.navigate(['studentlist'])
  }

}
