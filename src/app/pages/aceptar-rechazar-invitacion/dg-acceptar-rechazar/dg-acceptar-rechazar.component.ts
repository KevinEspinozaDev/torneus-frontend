import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dg-acceptar-rechazar',
  templateUrl: './dg-acceptar-rechazar.component.html',
  styleUrls: ['./dg-acceptar-rechazar.component.scss']
})
export class DgAcceptarRechazarComponent implements OnInit {

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) { }

  nombreEquipo: String = '';
  accionInvitacionString: String = '';
  accionInvitacionBoolean: Boolean = false;

  ngOnInit(): void {
    this.nombreEquipo = this.data.name;
    this.accionInvitacionString = this.data.acceptInv;
    this.accionInvitacionBoolean = this.data.accion;
  }

}
