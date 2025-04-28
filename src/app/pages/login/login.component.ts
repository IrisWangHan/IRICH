// home.component.ts
import { Component } from '@angular/core';
//引入 表單功能模組
import { FormsModule } from '@angular/forms';
//引入 基本指令與功能(*ngIf、*ngFor、ngMode、ngClass等)
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home', //元件名稱用於html上
  standalone: true,
  imports: [CommonModule, FormsModule],//提供html使用模組
  templateUrl: './login.component.html',
 styleUrl: './login.component.less'
})
export class LoginComponent {
  username = '';
  password = '';
  email = '';
  emailcode = '';
  isRegisterMode = false; // 註冊模式開關
  login() {
    if (this.username === 'admin' && this.password === '1234') {
      alert('登入成功！');
    } else {
      alert('帳號或密碼錯誤');
    }
  }

  goBack() {
    // 實現返回上一頁的邏輯
    window.history.back();
  }
  register(){
    if (this.username === 'admin' && this.password === '1234') {
      alert('註冊成功！');
    } else {
      alert('帳號或密碼錯誤');
    }
  }


   onSignIn( googleUser) {
    var profile = googleUser.getBasicProfile();
     console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
     console.log('Name: ' + profile.getName());
     console.log('Image URL: ' + profile.getImageUrl());
     console.log('Email: ' + profile.getEmail()); }
}
