import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LareiraService } from './../lareira.service';

import { Lareira } from './../../core/model';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-lareira-cadastro',
    templateUrl: './lareira-cadastro.component.html',
    styleUrls: ['./lareira-cadastro.component.css']
})
export class LareiraCadastroComponent implements OnInit {
    lareira = new Lareira();
    headerPage = '';

    constructor(
        private lareiraService: LareiraService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        const idLareira = +this.route.snapshot.paramMap.get('idLareira');

        this.headerPage = 'Nova Lareira';

        // Protege caso não seja retornado o código
        if (idLareira) {
            this.headerPage = 'Alterar Lareira';
            this.lareiraService.getLareira(idLareira).subscribe(lareira => this.lareira = lareira);
        }
    }

    salvar(form: FormControl) {
        if (this.lareira.idLareira) {
            this.atualizarLareira(form);
        } else {
            this.inserirLareira(form);
        }
    }

    atualizarLareira(form: FormControl) {
        this.lareiraService.atualizar(this.lareira)
            .then(lareira => {
                this.lareira = lareira;

                // this.messageService.add({ severity: 'success', detail: 'Pessoa alterada com sucesso!' });
                // this.atualizarTituloEdicao();
                this.router.navigate(['/lareira']);
            });
        // .catch(erro => this.errorHandler.handle(erro));
    }

    inserirLareira(form: FormControl) {
        this.lareiraService.adicionar(this.lareira)
            .then(lareiraAdicionada => {
                // this.messageService.add({ severity: 'success', detail: 'Pessoa adicionada com sucesso!' });
                this.router.navigate(['/lareira']);
            });
        // .catch(erro => this.errorHandler.handle(erro));
    }

}
