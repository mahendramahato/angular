import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayComponent } from "./display/display.component";
import { HeaderComponent } from "./header/header.component";
import { NavigateComponent } from "./navigate/navigate.component";
import { FooterComponent } from "./footer/footer.component";
import { ColorComponent } from "./color/color.component";
import { ColorChildComponent } from "./color/color-child/color-child.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DisplayComponent, HeaderComponent, NavigateComponent, FooterComponent, ColorComponent, ColorChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'main page app component';
}
