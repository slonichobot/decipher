import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { BrailPage } from '../pages/brail/brail';
import { BinaryPage } from '../pages/binary/binary';
import { MorsePage } from '../pages/morse/morse';
import { TabsPage } from '../pages/tabs/tabs';
import { FlagPage } from '../pages/flag/flag';
import { AbcPage } from '../pages/abc/abc';
import { CalcPage } from '../pages/calc/calc';

import { StatusBar } from '@ionic-native/status-bar';
import { Keyboard } from '@ionic-native/keyboard';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    BrailPage,
    BinaryPage,
    MorsePage,
    FlagPage,
    AbcPage,
    CalcPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BrailPage,
    BinaryPage,
    MorsePage,
    FlagPage,
    AbcPage,
    CalcPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
