import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AspirationComponent } from './aspiration/aspiration.component';
import { BarclaysLegalRightsComponent } from './dropdown/barclays-legal-rights/barclays-legal-rights.component';
import { BarcleyPlcComponent } from './dropdown/barcley-plc/barcley-plc.component';
import { BuyEONComponent } from './dropdown/buy-eon/buy-eon.component';
import { EONUKComponent } from './dropdown/eon-uk/eon-uk.component';
import { GovernmentScamsComponent } from './dropdown/government-scams/government-scams.component';
import { HmctsComponent } from './dropdown/hmcts/hmcts.component';
import { NhsScamsComponent } from './dropdown/nhs-scams/nhs-scams.component';
import { ProbonoBarristerComponent } from './dropdown/probono-barrister/probono-barrister.component';
import { RishiComplaintsComponent } from './dropdown/rishi-complaints/rishi-complaints.component';
import { SecretWhistleblowerComponent } from './dropdown/secret-whistleblower/secret-whistleblower.component';
import { SocialMediaComponent } from './dropdown/social-media/social-media.component';
import { VolenteerLeafletComponent } from './dropdown/volenteer-leaflet/volenteer-leaflet.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"", redirectTo:"home",pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"aspiration",component:AspirationComponent},
  {path:"rishi-Complaints",component:RishiComplaintsComponent},
  {path:"secret-whistleblower",component:SecretWhistleblowerComponent},
  {path:"barclays-plc",component:BarcleyPlcComponent},
  {path:"barclays-legal-rights",component:BarclaysLegalRightsComponent},
  {path:"buy-eon",component:BuyEONComponent},
  {path:"eon-uk",component:EONUKComponent},
  {path:"government-scams",component:GovernmentScamsComponent},
  {path:"hmcts",component:HmctsComponent},
  {path:"nhs-scams",component:NhsScamsComponent},
  {path:"probono-barrister",component:ProbonoBarristerComponent},
  {path:"volenteer-leaflet",component:VolenteerLeafletComponent},
  {path:"social-media",component:SocialMediaComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
