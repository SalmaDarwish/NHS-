import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HomeFormComponent } from './home-form/home-form.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ReadMoreModalComponent } from './read-more-modal/read-more-modal.component';
import { AspirationComponent } from './aspiration/aspiration.component';
import { RishiComplaintsComponent } from './dropdown/rishi-complaints/rishi-complaints.component';
import { SecretWhistleblowerComponent } from './dropdown/secret-whistleblower/secret-whistleblower.component';
import { BarcleyPlcComponent } from './dropdown/barcley-plc/barcley-plc.component';
import { BarclaysLegalRightsComponent } from './dropdown/barclays-legal-rights/barclays-legal-rights.component';
import { BuyEONComponent } from './dropdown/buy-eon/buy-eon.component';
import { EONUKComponent } from './dropdown/eon-uk/eon-uk.component';
import { GovernmentScamsComponent } from './dropdown/government-scams/government-scams.component';
import { HmctsComponent } from './dropdown/hmcts/hmcts.component';
import { NhsScamsComponent } from './dropdown/nhs-scams/nhs-scams.component';
import { ProbonoBarristerComponent } from './dropdown/probono-barrister/probono-barrister.component';
import { VolenteerLeafletComponent } from './dropdown/volenteer-leaflet/volenteer-leaflet.component';
import { SocialMediaComponent } from './dropdown/social-media/social-media.component';
import { ChangeChampionsLitigationTeamComponent } from './dropdown/change-champions-litigation-team/change-champions-litigation-team.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { HMCTSGroupClaimComponent } from './dropdown/hmcts-group-claim/hmcts-group-claim.component';
import { NHSGroupClaimComponent } from './dropdown/nhs-group-claim/nhs-group-claim.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    HomeFormComponent,
    SideMenuComponent,
    ReadMoreModalComponent,
    AspirationComponent,
    RishiComplaintsComponent,
    SecretWhistleblowerComponent,
    BarcleyPlcComponent,
    BarclaysLegalRightsComponent,
    BuyEONComponent,
    EONUKComponent,
    GovernmentScamsComponent,
    HmctsComponent,
    NhsScamsComponent,
    ProbonoBarristerComponent,
    VolenteerLeafletComponent,
    SocialMediaComponent,
    ChangeChampionsLitigationTeamComponent,
    ComplaintsComponent,
    HMCTSGroupClaimComponent,
    NHSGroupClaimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
