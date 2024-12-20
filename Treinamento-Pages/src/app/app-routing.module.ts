import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'tela-confirmar/:valorDiaria/:dias/:total',
    loadChildren: () =>
      import('./tela-confirmar/tela-confirmar.module').then(
        (m) => m.TelaConfirmarPageModule
      ),
  },
  {
    path: 'reservado/:total',
    loadChildren: () =>
      import('./reservado/reservado.module').then((m) => m.ReservadoPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
