import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayComponent } from "./display/display.component";
import { HeaderComponent } from "./header/header.component";
import { NavigateComponent } from "./navigate/navigate.component";
import { FooterComponent } from "./footer/footer.component";
import { ColorComponent } from "./color/color.component";
import { ColorChildComponent } from "./color/color-child/color-child.component";
import { StudListComponent } from "./student/stud-list/stud-list.component";
import { NumberListComponent } from "./number-list/number-list.component";
import { TodoAnimationsComponent } from "./todo-animations/todo-animations.component";
import { StudentDetailsComponent } from "./student-details/student-details.component";
import { StudentMarksComponent } from "./student-marks/student-marks.component";
import { ObservableDemoComponent } from "./observable-demo/observable-demo.component";
import { StudentListHttpComponent } from "./studentcomp/student-list-http/student-list-http.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DisplayComponent, HeaderComponent,
    NavigateComponent, FooterComponent, ColorComponent,
    ColorChildComponent, StudListComponent, NumberListComponent,
    TodoAnimationsComponent, StudentDetailsComponent, StudentMarksComponent, ObservableDemoComponent, StudentListHttpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'main page app component';
}
