import { Component, SimpleChanges } from '@angular/core';
import { NgFor } from '@angular/common';
import { ColorChildComponent } from "./color-child/color-child.component";

@Component({
  selector: 'app-color',
  standalone: true,
  imports: [NgFor, ColorChildComponent],
  templateUrl: './color.component.html',
  styleUrl: './color.component.css'
})
export class ColorComponent {

  allColors:string[]=["Red", "Green", "Blue"]

  month:string="January"

  constructor(){
    console.log("Parent constructor");
  }

  ngOnchanges(changes:SimpleChanges){
    console.log("Changes in parent component");
  }

  ngOnInit() {
    console.log("Parent component initialized");
  }

  showmonth(month:string){
    console.log(month)
  }

  removecolor(color:string){
    this.allColors.splice(this.allColors.indexOf(color),1);
  }


}
