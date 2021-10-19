import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogSearchUserComponent } from '../dialog-search-user/dialog-search-user.component'


@Component({
  selector: 'app-invitar-jugadores-main',
  templateUrl: './invitar-jugadores-main.component.html',
  styleUrls: ['./invitar-jugadores-main.component.scss']
})
export class InvitarJugadoresMainComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.maxWidth = "100%";
    dialogConfig.width = "80%";
    //dialogConfig.height = "90%";

    this.dialog.open(DialogSearchUserComponent, dialogConfig);
  }

  ngOnInit(): void {
  }

}