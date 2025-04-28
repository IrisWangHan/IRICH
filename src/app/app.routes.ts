// 引入元件
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';



//定義元件的路由規則
//指定如果輸入 / 就統一導向到Homes
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: LoginComponent },
  { path: 'home', component: HomeComponent },

];


