import { Component, Input } from '@angular/core';
import { Data } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [FormsModule, FooterComponent],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})

export class DisplayComponent {

  greet:string = "Hello";

  @Input() printmonth:string='';

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
