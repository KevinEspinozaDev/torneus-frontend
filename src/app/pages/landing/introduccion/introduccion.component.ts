import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-introduccion',
  templateUrl: './introduccion.component.html',
  styleUrls: ['./introduccion.component.scss']
})
export class IntroduccionComponent implements OnInit {

  flag: boolean;

  constructor(
    private authenticationService: AuthenticationService,
  ) {
    this.flag = false;
   }

  ngOnInit(): void {
  }

  isUserLoged(): boolean{
    this.flag = this.authenticationService.isUserLoged();

    return this.flag;
  }

}
