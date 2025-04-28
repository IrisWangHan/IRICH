//引入  bootstrapApplication 來初始化啟動應用
import { bootstrapApplication } from '@angular/platform-browser';
//引入 啟動設定檔(元件、路由、服務等)
import { appConfig } from './app/app.config';
//引入 根元件 構建畫面
import { AppComponent } from './app/app.component';


//初始化啟動應用(根元件 構建畫面 , 啟動設定檔)
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
