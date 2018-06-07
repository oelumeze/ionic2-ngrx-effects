import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { DetailsPage } from '../pages/details/details';

import { StoreModule } from '@ngrx/store';  
import { UserReducers } from '../reducers/user.reducer';  
import { UserActions } from '../actions/user.actions';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
        StoreModule.provideStore({ users: UserReducers })

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DetailsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserActions
  ]
})
export class AppModule {}
