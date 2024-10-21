import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-animations',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-animations.component.html',
  styleUrl: './todo-animations.component.css',
  animations: [
    trigger('fade' ,[
      transition('void=>*',[
        style({backgroundColor: 'green', opacity: 0}),
        animate(2000, style({backgroundColor:'transparent', opacity: 1}))
      ]),
      transition('*=>void',[
        style({backgroundColor: 'transparent', opacity: 1}),
        animate(2000, style({backgroundColor:'red', opacity: 1, transform: 'translateX(-20px)'}))
      ])
    ])
  ]

  
})
export class TodoAnimationsComponent {
  todoitem:string='';
  allToDo:string[] = [ "Go To market", "but vegetables", "put gas"]

  AddList(){
    this.allToDo.push(this.todoitem);
    this.todoitem = '';
  }

  removelist(todo:string){
    this.allToDo.splice(this.allToDo.indexOf(todo), 1);
  }
}
