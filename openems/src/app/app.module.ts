import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileModalPageModule } from './shared/profile-modal/profile-modal.module';
import { HelpModalPageModule } from './shared/help-modal/help-modal.module';
import { AboutModalPageModule } from './shared/about-modal/about-modal.module';
import { BatterieinfoPageModule } from './inbetriebnahme/prohybrid/batterie/batterieinfo/batterieinfo.module';
import { BatterieinfoPageModuleC } from './inbetriebnahme/commercial/batterie/batterieinfo/batterieinfo.module';
import { WechselrichterinfoPageModule } from './inbetriebnahme/prohybrid/wechselrichter/wechselrichterinfo/wechselrichterinfo.module';
import { WechselrichterinfoPageModuleC } from './inbetriebnahme/commercial/wechselrichter/wechselrichterinfo/wechselrichterinfo.module';
import { ProtocolinfoPageModule } from './inbetriebnahme/prohybrid/protocol/protocolinfo/protocolinfo.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ProfileModalPageModule,
    HelpModalPageModule,
    AboutModalPageModule,
    BatterieinfoPageModule,
    WechselrichterinfoPageModuleC,
    ProtocolinfoPageModule,
    WechselrichterinfoPageModule,
    BatterieinfoPageModuleC,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
