// home.component.ts
import { Component } from '@angular/core';
//引入 基本指令與功能(*ngIf、*ngFor、ngMode、ngClass等)
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],//提供html使用模組
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {

}
