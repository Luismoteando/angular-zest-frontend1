import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {HomeComponent} from "./home/home.component";
import {NavigationBarComponent} from "./home/navigation-bar/navigation-bar.component";
import {SchedulerComponent} from "./home/scheduler/scheduler.component";
import {FooterComponent} from "./home/footer/footer.component";
import {SchedulerHeaderComponent} from "./home/scheduler-header/scheduler-header.component";
import {ContextMenuModule} from 'ngx-contextmenu';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationBarComponent,
    SchedulerComponent,
    FooterComponent,
    SchedulerHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule.forRoot({provide: DateAdapter, useFactory: adapterFactory}),
    ContextMenuModule.forRoot({
      useBootstrap4: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
