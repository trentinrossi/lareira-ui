import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule, ConfirmDialogModule } from 'primeng/primeng';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';

import { CasalRoutingModule } from './casal-routing.module';
import { CasalCadastroComponent } from './casal-cadastro/casal-cadastro.component';
import { CasalPesquisaComponent } from './casal-pesquisa/casal-pesquisa.component';
import { SharedModule } from '../shared/shared.module';

import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

@NgModule({
    declarations: [
        CasalCadastroComponent,
        CasalPesquisaComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        TooltipModule,
        DropdownModule,
        FormsModule,
        InputTextModule,
        TableModule,
        ButtonModule,
        ConfirmDialogModule,
        FieldsetModule,
        InputTextareaModule,
        CalendarModule,
        ReactiveFormsModule,
        CasalRoutingModule,
        SharedModule,
        MessageModule,
        MessagesModule
    ]
})
export class CasalModule { }
