import { LareiraRoutingModule } from './lareira-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LareiraCadastroComponent } from './lareira-cadastro/lareira-cadastro.component';
import { LareiraPesquisaComponent } from './lareira-pesquisa/lareira-pesquisa.component';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/primeng';

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
        LareiraRoutingModule
    ]
})
export class LareiraModule { }
