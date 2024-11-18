import { Component, NgModule } from '@angular/core';
import { ExpoPipe } from '../custom-pipe/expo.pipe';
import { FilterDataPipe } from '../custom-pipe/filter-data.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-number-list',
  standalone: true,
  imports: [ExpoPipe, FilterDataPipe, CommonModule],
  templateUrl: './number-list.component.html',
  styleUrl: './number-list.component.css'
})
export class NumberListComponent {

  allNumbers:number[]=[1,2,3,4,5];



}
