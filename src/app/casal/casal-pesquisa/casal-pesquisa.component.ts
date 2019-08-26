import { LazyLoadEvent } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

import { ConfirmationService, MessageService } from 'primeng/primeng';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { CasalService, Filtro } from './../casal.service';

@Component({
    selector: 'app-casal-pesquisa',
    templateUrl: './casal-pesquisa.component.html',
    styleUrls: ['./casal-pesquisa.component.css']
})
export class CasalPesquisaComponent implements OnInit {

    casais = [];
    columns: any[];
    totalRegistros = 0;
    loading: boolean;
    filtro = new Filtro();

    constructor(
        private casalService: CasalService,
        private errorHandler: ErrorHandlerService,
        private confirmation: ConfirmationService,
        private messageService: MessageService
    ) { }

    ngOnInit() {
        this.columns = [
            { field: 'maridoNome', header: 'Nome Marido' },
            { field: 'maridoSobrenome', header: 'Sobrenome Marido' },
            { field: 'maridoTelCelular', header: 'Celular Marido' },
            { field: 'esposaNome', header: 'Nome Esposa' },
            { field: 'esposaSobrenome', header: 'Sobrenome Esposa' },
            { field: 'esposaTelCelular', header: 'Celular Esposa' },
        ];

        this.loading = true;
        this.pesquisar();
    }

    pesquisar(pagina = 0) {
        this.filtro.pagina = pagina;

        this.casalService.pesquisar(this.filtro)
            .then(casais => {
                this.totalRegistros = casais.total;
                this.casais = casais.casais;
                this.loading = false;
            })
            .catch(erro => this.errorHandler.handle(erro));
    }

    aoMudarPagina(event: LazyLoadEvent) {
        console.log(event.globalFilter);
        const pagina = event.first / event.rows;

        this.filtro.pagina = pagina;
        this.filtro.glogalFilter = event.globalFilter;

        this.pesquisar(pagina);
    }

    confirmarExclusao(casal: any) {
        console.log(casal);

        this.confirmation.confirm({
            message: 'Tem certeza que deseja excluir?',
            accept: () => {
                this.excluir(casal);
            }
        });
    }

    excluir(casal: any) {
        this.casalService.excluir(casal.idCasal)
            .then(() => {
                this.pesquisar();
                this.messageService.add({ severity: 'success', detail: 'Casal excluído com sucesso!' });
            })
            .catch(erro => this.errorHandler.handle(erro));
    }

}
