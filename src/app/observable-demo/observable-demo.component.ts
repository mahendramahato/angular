import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  standalone: true,
  imports: [],
  templateUrl: './observable-demo.component.html',
  styleUrl: './observable-demo.component.css'
})
export class ObservableDemoComponent {

  myObservable :Observable<string>=new Observable((observer)=>{
    console.log("streaming started ....")
    observer.next("A");
    observer.next("B");
    observer.next("C");
    observer.next("D");
    observer.next("E");
    observer.complete();
  });
  
  StartSubscription(){
    this.myObservable.subscribe({
      next: (val)=>{console.log(val);
      },
      error:(err)=>{
        console.log(err.message);
      },
      complete:()=>{console.log("streaming complete ....")}
      });
  }

}
