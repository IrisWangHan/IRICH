import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//引入layout元件header footer
import { HeaderComponent } from './components/header/header.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent],//套用到html中
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'irch';
}
