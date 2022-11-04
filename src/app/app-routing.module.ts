import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'navaja',
    pathMatch: 'full'
  },
  {
    path: 'genero',
    loadChildren: () => import('./pages/genero/genero.module').then( m => m.GeneroPageModule)
  },
  {
    path: 'age',
    loadChildren: () => import('./pages/age/age.module').then( m => m.AgePageModule)
  },
  {
    path: 'universidades',
    loadChildren: () => import('./pages/universidades/universidades.module').then( m => m.UniversidadesPageModule)
  },
  {
    path: 'clima',
    loadChildren: () => import('./pages/clima/clima.module').then( m => m.ClimaPageModule)
  },
  {
    path: 'contratame',
    loadChildren: () => import('./pages/contratame/contratame.module').then( m => m.ContratamePageModule)
  },
  {
    path: 'navaja',
    loadChildren: () => import('./pages/navaja/navaja.module').then( m => m.NavajaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
