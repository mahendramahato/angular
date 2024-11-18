import { Component } from '@angular/core';
import { Stud } from './stud.model';
import { DatePipe, UpperCasePipe, PercentPipe, CurrencyPipe, NgClass, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterDataPipe } from '../../custom-pipe/filter-data.pipe';


@Component({
  selector: 'app-stud-list',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, PercentPipe, CurrencyPipe, 
    FormsModule, FilterDataPipe, NgClass, NgStyle],
  templateUrl: './stud-list.component.html',
  styleUrl: './stud-list.component.css'
})
export class StudListComponent {

  filterValue: string='';
  allNumbers:number[]=[3,2,1,4];

  allStud:Stud[]=[];

  // allStud:Stud[] = [
  //   {
  //     studId: 100,
  //     studName: 'Hari',
  //     studTotalMarks: 500,
  //     studDob: new Date(5,5,2024),
  //     studGender: 'Female'
  //   },
  //   {
  //     studId: 101,
  //     studName: 'Shyam',
  //     studTotalMarks: 240,
  //     studDob: new Date(2,5,2020),
  //     studGender: 'Male'
  //   },
  //   {
  //     studId: 102,
  //     studName: 'Jina',
  //     studTotalMarks: 360,
  //     studDob: new Date(4,5,2013),
  //     studGender: 'Female'
  //   },
  //   {
  //     studId: 103,
  //     studName: 'Joy',
  //     studTotalMarks: 390,
  //     studDob: new Date(5,8,2020),
  //     studGender: 'Male'
  //   },
  // ];
  
  // getMarks(mark:number){
  //   if(mark>400){
  //     return 'green';
  //   }else if(mark>300 && mark<400){
  //     return 'blue';
  //   }else{
  //     return 'red';
  //   }
  // }

  AddTestStud(){
    let newStud={
      id: 104,
      studName: 'Test Student',
      studTotalMarks: 190,
      studDob: new Date(2,9,2010),
      studGender: 'Male'
    }
    this.allStud.push(newStud);
  }

}
