import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stud } from './stud-list/stud.model';

@Injectable({
  providedIn: 'root'
})
export class StudentHttpService {

  private baseUrl = 'http://localhost:3000/students'

  constructor(private httpClient:HttpClient) { }

  getAllStudents():Observable<Stud[]> {
    return this.httpClient.get<Stud[]>(this.baseUrl);
  }

  getAStudent(id:number):Observable<Stud>{
    return this.httpClient.get<Stud>(this.baseUrl+'/'+id);
  }

  delete(id:number):Observable<void>{
    return this.httpClient.delete<void>(this.baseUrl +'/'+ id);
  }

  updateStudent(){
    
  }

}
