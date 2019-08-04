import { ConfirmationService, MessageService } from 'primeng/primeng';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { LareiraService } from './../lareira.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-lareira-pesquisa',
    templateUrl: './lareira-pesquisa.component.html',
    styleUrls: ['./lareira-pesquisa.component.css']
})
export class LareiraPesquisaComponent implements OnInit {

    lareiras = [];
    columns: any[];

    constructor(
        private lareiraService: LareiraService,
        private errorHandler: ErrorHandlerService,
        private confirmation: ConfirmationService,
        private messageService: MessageService
    ) { }

    ngOnInit() {
        this.columns = [
            { field: 'nome', header: 'Nome' },
            { field: 'cidade', header: 'Cidade' },
            { field: 'endereco', header: 'Endereço' },
            { field: 'bairro', header: 'Bairro' },
            { field: 'cep', header: 'CEP' },
            { field: 'telefone', header: 'Telefone' }
        ];

        this.pesquisar();
    }

    pesquisar() {
        this.lareiraService.pesquisar()
            .then(lareiras => this.lareiras = lareiras);
    }

    confirmarExclusao(lareira: any) {
        console.log(lareira);

        this.confirmation.confirm({
            message: 'Tem certeza que deseja excluir?',
            accept: () => {
                this.excluir(lareira);
            }
        });
    }

    excluir(lareira: any) {
        this.lareiraService.excluir(lareira.idLareira)
            .then(() => {
                this.pesquisar();
                this.messageService.add({ severity: 'success', detail: 'Lareira excluída com sucesso!' });
            })
            .catch(erro => this.errorHandler.handle(erro));
    }
}
