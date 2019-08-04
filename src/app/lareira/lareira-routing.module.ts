import { AuthGuard } from './../seguranca/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LareiraPesquisaComponent } from './lareira-pesquisa/lareira-pesquisa.component';
import { LareiraCadastroComponent } from './lareira-cadastro/lareira-cadastro.component';

const routes: Routes = [
  {
    path: '',
    component: LareiraPesquisaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['LAREIRA_VIEW'] }
  },
  {
    path: 'nova',
    component: LareiraCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['LAREIRA_INSERT'] }
  },
  {
    path: ':idLareira',
    component: LareiraCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['LAREIRA_INSERT'] }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LareiraRoutingModule { }
