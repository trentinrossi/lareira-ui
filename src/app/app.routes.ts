import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardDemoComponent } from './demo/view/dashboarddemo.component';

const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'lareira', loadChildren: './lareira/lareira.module#LareiraModule' },

    { path: 'dashboard', component: DashboardDemoComponent}
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutes { }
