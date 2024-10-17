import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-child',
  standalone: true,
  imports: [],
  templateUrl: './color-child.component.html',
  styleUrl: './color-child.component.css'
})
export class ColorChildComponent {

  @Input() printmonth:string='';

  @Output() showEventEmitter=new EventEmitter();

  showmonth(printmonth:string){
    this.showEventEmitter.emit();
  }
  

  

}
