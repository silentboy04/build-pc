import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MulaiRakitPage } from './mulai-rakit.page';

const routes: Routes = [
  {
    path: '',
    component: MulaiRakitPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MulaiRakitPage]
})
export class MulaiRakitPageModule {}
