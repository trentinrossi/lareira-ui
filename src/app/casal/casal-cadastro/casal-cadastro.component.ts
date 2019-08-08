import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CasalService } from './../casal.service';
import { Casal } from './../../core/model';

@Component({
    selector: 'app-casal-cadastro',
    templateUrl: './casal-cadastro.component.html',
    styleUrls: ['./casal-cadastro.component.css']
})
export class CasalCadastroComponent implements OnInit {

    casal = new Casal();
    headerPage = '';

    constructor(
        private casalService: CasalService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        const idCasal = +this.route.snapshot.paramMap.get('idCasal');

        this.headerPage = 'Novo Casal';

        // Protege caso não seja retornado o código
        if (idCasal) {
            this.headerPage = 'Alterar Casal';
            this.casalService.getCasal(idCasal).subscribe(casal => this.casal = casal);
        }
    }

    salvar(form: FormControl) {
        if (this.casal.idCasal) {
            this.atualizarCasal(form);
        } else {
            this.inserirCasal(form);
        }
    }

    atualizarCasal(form: FormControl) {
        this.casalService.atualizar(this.casal)
            .then(casal => {
                this.casal = casal;

                // this.messageService.add({ severity: 'success', detail: 'Pessoa alterada com sucesso!' });
                // this.atualizarTituloEdicao();
                this.router.navigate(['/casal']);
            });
        // .catch(erro => this.errorHandler.handle(erro));
    }

    inserirCasal(form: FormControl) {
        this.casalService.adicionar(this.casal)
            .then(casalAdicionado => {
                // this.messageService.add({ severity: 'success', detail: 'Pessoa adicionada com sucesso!' });
                this.router.navigate(['/casal']);
            });
        // .catch(erro => this.errorHandler.handle(erro));
    }

}
