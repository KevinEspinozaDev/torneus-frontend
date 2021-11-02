import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-solicitud-torneo',
  templateUrl: './dialog-solicitud-torneo.component.html',
  styleUrls: ['./dialog-solicitud-torneo.component.scss']
})
export class DialogSolicitudTorneoComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

}
