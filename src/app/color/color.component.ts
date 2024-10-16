import { Component } from '@angular/core';
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


}
