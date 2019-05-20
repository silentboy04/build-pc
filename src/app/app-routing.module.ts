import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'mulai-rakit', loadChildren: './mulai-rakit/mulai-rakit.module#MulaiRakitPageModule' },
  { path: 't-proc', loadChildren: './t-proc/t-proc.module#TProcPageModule' },
  { path: 'daftarrakit', loadChildren: './daftarrakit/daftarrakit.module#DaftarrakitPageModule' },
  { path: 'detailrakit', loadChildren: './detailrakit/detailrakit.module#DetailrakitPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
