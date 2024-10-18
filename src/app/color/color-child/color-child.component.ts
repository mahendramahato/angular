import { Component, Input, Output, SimpleChanges } from '@angular/core';
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

  constructor(){
    console.log("child constructor");
  }

  ngOnchanges(changes:SimpleChanges){
    console.log("changes happened in child");
  }

  ngOnInit(){
    console.log("child initialized");
  }

  showmonth(printmonth:string){
    this.showEventEmitter.emit();
  }
  

  

}
