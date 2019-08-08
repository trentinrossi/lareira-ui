import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './../seguranca/auth.guard';

import { CasalCadastroComponent } from './casal-cadastro/casal-cadastro.component';
import { CasalPesquisaComponent } from './casal-pesquisa/casal-pesquisa.component';

const routes: Routes = [
    {
        path: '',
        component: CasalPesquisaComponent,
        canActivate: [AuthGuard],
        data: { roles: ['CASAL_VIEW'] }
    },
    {
        path: 'novo',
        component: CasalCadastroComponent,
        canActivate: [AuthGuard],
        data: { roles: ['CASAL_INSERT'] }
    },
    {
        path: ':idCasal',
        component: CasalCadastroComponent,
        canActivate: [AuthGuard],
        data: { roles: ['CASAL_INSERT'] }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CasalRoutingModule { }
