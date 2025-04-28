//Angular 19 的 應用程式啟動設定（appConfig）
//引入   app 的類型 / Angular Change Detection 的行為
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

//引入  路由功能和路由表
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    //效能優化 - 變更偵測的行為
    // eventCoalescing: true 事件合併，會將多個事件合併成一個事件來減少變更檢測的次數
    provideZoneChangeDetection({ eventCoalescing: true }),

    //啟用 Angular Router (匯入自定義的 routes )
    //讓 <router-outlet> 能夠切換頁面
    provideRouter(routes)]
};
