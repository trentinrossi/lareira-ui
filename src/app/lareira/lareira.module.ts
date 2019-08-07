import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { InputTextModule, ConfirmDialogModule } from 'primeng/primeng';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';

import { LareiraRoutingModule } from './lareira-routing.module';
import { LareiraCadastroComponent } from './lareira-cadastro/lareira-cadastro.component';
import { LareiraPesquisaComponent } from './lareira-pesquisa/lareira-pesquisa.component';

@NgModule({
    declarations: [
        LareiraCadastroComponent,
        LareiraPesquisaComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        TooltipModule,
        FormsModule,
        InputTextModule,
        TableModule,
        ButtonModule,
        LareiraRoutingModule,
        ConfirmDialogModule
    ]
})
export class LareiraModule { }
