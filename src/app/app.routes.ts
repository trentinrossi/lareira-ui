import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';
import { NaoAutorizadoComponent } from './core/nao-autorizado.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardDemoComponent } from './demo/view/dashboarddemo.component';

const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'lareira', loadChildren: './lareira/lareira.module#LareiraModule' },

    { path: 'dashboard', component: DashboardDemoComponent },
    { path: 'nao-autorizado', component: NaoAutorizadoComponent },
    { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
    { path: '**', redirectTo: 'pagina-nao-encontrada' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutes { }
