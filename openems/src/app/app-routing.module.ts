import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'ibn/start', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'overview', loadChildren: './overview/overview.module#OverviewPageModule' },
  { path: 'help-modal', loadChildren: './shared/help-modal/help-modal.module#HelpModalPageModule' },
  { path: 'about-modal', loadChildren: './shared/about-modal/about-modal.module#AboutModalPageModule' },
  { path: 'setup', loadChildren: './setup/setup.module#SetupPageModule' },
  { path: 'setup-two', loadChildren: './setup-two/setup-two.module#SetupTwoPageModule' },
  { path: 'setup-three', loadChildren: './setup-three/setup-three.module#SetupThreePageModule' },
  { path: 'setup-fehler', loadChildren: './setup-fehler/setup-fehler.module#SetupFEHLERPageModule' },
  { path: 'setup-erfolgreich', loadChildren: './setup-erfolgreich/setup-erfolgreich.module#SetupErfolgreichPageModule' },
  { path: 'setup-four', loadChildren: './setup-four/setup-four.module#SetupFourPageModule' },
  { path: 'setup-five', loadChildren: './setup-five/setup-five.module#SetupFivePageModule' },
  { path: 'setup-six', loadChildren: './setup-six/setup-six.module#SetupSixPageModule' },
  { path: 'setup-erfolgreich1', loadChildren: './setup-erfolgreich1/setup-erfolgreich1.module#SetupErfolgreich1PageModule' },
  { path: 'setup-fehler1', loadChildren: './setup-fehler1/setup-fehler1.module#SetupFehler1PageModule' },
  { path: 'setup-connection', loadChildren: './setup-connection/setup-connection.module#SetupConnectionPageModule' },
  { path: 'setup-ibnprotokol', loadChildren: './setup-ibnprotokol/setup-ibnprotokol.module#SetupIbnprotokolPageModule' },
  { path: 'ibn-finish', loadChildren: './ibn-finish/ibn-finish.module#IBNFinishPageModule' },
  { path: 'ibn/start', loadChildren: './inbetriebnahme/start/start.module#StartPageModule' },
  { path: 'ibn/auswahl', loadChildren: './inbetriebnahme/auswahl/auswahl.module#AuswahlPageModule' },
  { path: 'ibn/auswahl/check', loadChildren: './inbetriebnahme/auswahl/check/check.module#CheckPageModule' },
  { path: 'ibn/prohybrid/batterie', loadChildren: './inbetriebnahme/prohybrid/batterie/batterie.module#BatteriePageModule' },
  { path: 'ibn/prohybrid/batterie/success', loadChildren: './inbetriebnahme/prohybrid/batterie/success/success.module#SuccessPageModule' },
  { path: 'ibn/prohybrid/wechselrichter', loadChildren: './inbetriebnahme/prohybrid/wechselrichter/wechselrichter.module#WechselrichterPageModule' },
  { path: 'ibn/prohybrid/wechselrichter/settings', loadChildren: './inbetriebnahme/prohybrid/wechselrichter/settings/settings.module#SettingsPageModule' },
  { path: 'ibn/prohybrid/wechselrichter/success', loadChildren: './inbetriebnahme/prohybrid/wechselrichter/success/success.module#SuccessPageModule' },
  { path: 'ibn/prohybrid/protocol/error', loadChildren: './inbetriebnahme/prohybrid/protocol/error/error.module#ErrorPageModule' },
  { path: 'ibn/prohybrid/protocol/success', loadChildren: './inbetriebnahme/prohybrid/protocol/success/success.module#SuccessPageModule' },
  { path: 'ibn/prohybrid/protocol', loadChildren: './inbetriebnahme/prohybrid/protocol/protocol.module#ProtocolPageModule' },
  { path: 'batterieinfo', loadChildren: './inbetriebnahme/prohybrid/batterie/batterieinfo/batterieinfo.module#BatterieinfoPageModule' },
  { path: 'wechselrichterinfo', loadChildren: './inbetriebnahme/prohybrid/wechselrichter/wechselrichterinfo/wechselrichterinfo.module#WechselrichterinfoPageModule' },
  { path: 'protocolinfo', loadChildren: './inbetriebnahme/prohybrid/protocol/protocolinfo/protocolinfo.module#ProtocolinfoPageModule' },
  { path: 'ibn/commercial/batterie/batterie', loadChildren: './inbetriebnahme/commercial/batterie/batterie.module#BatteriePageModule' },
  { path: 'ibn/commercial/batterieinfo', loadChildren: './inbetriebnahme/commercial/batterie/batterieinfo/batterieinfo.module#BatterieinfoPageModuleC' },
  { path: 'ibn/commercial/wechselrichter/wechselrichter', loadChildren: './inbetriebnahme/commercial/wechselrichter/wechselrichter.module#WechselrichterPageModule' },
  { path: 'ibn/commercial/wechselrichter/settings', loadChildren: './inbetriebnahme/commercial/wechselrichter/settings/settings.module#SettingsPageModule' },
  { path: 'ibn/commercial/wechselrichter/wechselrichterinfo', loadChildren: './inbetriebnahme/commercial/wechselrichter/wechselrichterinfo/wechselrichterinfo.module#WechselrichterinfoPageModuleC' },
  { path: 'ibn/commercial/wechselrichter/wechselrichtererror', loadChildren: './inbetriebnahme/commercial/wechselrichter/wechselrichtererror/wechselrichtererror.module#WechselrichtererrorPageModule' },
  { path: 'ibn/commercial/batterie/batterieerror', loadChildren: './inbetriebnahme/commercial/batterie/batterieerror/batterieerror.module#BatterieerrorPageModule' },

]


  ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
