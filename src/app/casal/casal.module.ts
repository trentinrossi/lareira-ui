import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { InputTextModule, ConfirmDialogModule } from 'primeng/primeng';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { CasalRoutingModule } from './casal-routing.module';
import { CasalCadastroComponent } from './casal-cadastro/casal-cadastro.component';
import { CasalPesquisaComponent } from './casal-pesquisa/casal-pesquisa.component';

@NgModule({
    declarations: [
        CasalCadastroComponent,
        CasalPesquisaComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        TooltipModule,
        FormsModule,
        InputTextModule,
        TableModule,
        ButtonModule,
        ConfirmDialogModule,
        FieldsetModule,
        InputTextareaModule,
        CasalRoutingModule
    ]
})
export class CasalModule { }
