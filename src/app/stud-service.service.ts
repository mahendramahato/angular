import { Injectable } from '@angular/core';
import { Stud } from './student/stud-list/stud.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudServiceService {

  private url:string='http://localhost:3000/students';

  allstud:any[]=[
    [
      {
      "studId": 100,
      "studName": "Hari",
      "studTotalMarks": 250,
      "studGender": "Male"
      },
      {
      "studId": 101,
      "studName": "jina",
      "studTotalMarks": 450,
      "studGender": "Female"
      },
      {
      "studId": 102,
      "studName": "hira",
      "studTotalMarks": 400,
      "studGender": "Female"
      },
      {
      "studId": 103,
      "studName": "jony",
      "studTotalMarks": 300,
      "studGender": "Male"
      }
    ]
  ]

  constructor(private http:HttpClient) {  }

  getAllStudents():Observable<Stud[]>{
    return this.http.get<Stud[]>(this.url);
  }

}
