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

    constructor(private lareiraService: LareiraService) { }

    ngOnInit() {
        this.columns = [
            { field: 'nome', header: 'Nome' },
            { field: 'endereco', header: 'Endereço' },
            { field: 'bairro', header: 'Bairro' },
            { field: 'cep', header: 'CEP' }
        ];

        this.pesquisar();
    }

    pesquisar() {
        this.lareiraService.pesquisar()
            .then(lareiras => this.lareiras = lareiras);
    }

    confirmarExclusao(lareira: any) {
        console.log(lareira);
        this.excluir(lareira);

        // this.confirmation.confirm({
        //     message: 'Tem certeza que deseja excluir?',
        //     accept: () => {
        //         this.excluir(lareira);
        //     }
        // });
    }

    excluir(lareira: any) {
        this.lareiraService.excluir(lareira.idLareira)
            .then(() => {
                this.pesquisar();
            });
    }
}
