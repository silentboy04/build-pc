import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { DaftarrakitPage } from './daftarrakit.page';

const routes: Routes = [
  {
    path: '',
    component: DaftarrakitPage
  },
  { path: 'detailrakit', loadChildren: './detailrakit/detailrakit.module#DetailrakitPageModule' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DaftarrakitPage]
})
export class DaftarrakitPageModule {
  constructor(public router: Router){

  }

}
