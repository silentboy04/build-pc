import { Component } from '@angular/core';
//import { NavController } from '@ionic/angular';
//import { MulaiRakitPage } from '../mulai-rakit/mulai-rakit.page';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router){

  }

  mulaiRakit(){
    console.log("clicked")
    this.router.navigate(['mulai-rakit'])
  }
  daftarRakit(){
    console.log("clicked")
    this.router.navigate(['daftarrakit'])
  }
}
