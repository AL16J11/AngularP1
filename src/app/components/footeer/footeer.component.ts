import { Component } from '@angular/core';

@Component({
  selector: 'app-footeer',
  templateUrl: './footeer.component.html',
  styleUrls: ['./footeer.component.css']
})
export class FooteerComponent {
  anio:number;
  constructor(  ) {
    this.anio= new Date().getFullYear();
  }

}
