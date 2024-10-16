import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {

  flowerName:string = 'Red Rose';
  number1:number = 90;
  dob:Data= new Date(5,2,2023);
  cond:boolean = true;

  counter:number=50;

  changeName(){
    this.flowerName = 'Lavender';
  }

  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }

}
