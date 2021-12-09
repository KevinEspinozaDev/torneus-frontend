import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmarRolComponent } from '../dialog-confirmar-rol/dialog-confirmar-rol.component';

@Component({
  selector: 'app-register-main',
  templateUrl: './register-main.component.html',
  styleUrls: ['./register-main.component.scss']
})
export class RegisterMainComponent implements OnInit {

  idRolElegido:any;

  constructor(
    public dialog: MatDialog
  ) { }

  openDialog(id:number) {
    this.idRolElegido = id;
    const dialogRef = this.dialog.open(DialogConfirmarRolComponent, {
      data: {
        idRol: this.idRolElegido
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.idRolElegido = null;
    });
  }

  ngOnInit(): void {
  }

}
