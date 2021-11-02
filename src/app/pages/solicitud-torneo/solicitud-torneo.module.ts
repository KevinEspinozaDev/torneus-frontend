import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { SolicitudTorneoRoutingModule } from './solicitud-torneo-router';
import { SolicitudTorneoMainComponent } from './solicitud-torneo-main/solicitud-torneo-main.component';
import { SearchTournamentComponent } from './search-tournament/search-tournament.component';
import { DialogSolicitudTorneoComponent } from './dialog-solicitud-torneo/dialog-solicitud-torneo.component';
//import { SearchUserComponent } from './search-user/search-user.component';
//import { DialogSearchUserComponent } from './dialog-search-user/dialog-search-user.component';




@NgModule({
  declarations: [
    SolicitudTorneoMainComponent,
    SearchTournamentComponent,
    DialogSolicitudTorneoComponent,
    //SearchUserComponent,
    //DialogSearchUserComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SolicitudTorneoRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
  ],
  
})
export class SolicitudTorneoModule { }
