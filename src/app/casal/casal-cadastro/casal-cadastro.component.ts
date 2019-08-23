import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { LareiraService } from './../../lareira/lareira.service';
import { CasalService } from './../casal.service';
import { Casal, Lareira } from './../../core/model';
import { MessageService } from 'primeng/components/common/messageservice';
import { ErrorHandlerService } from './../../core/error-handler.service';

@Component({
    selector: 'app-casal-cadastro',
    templateUrl: './casal-cadastro.component.html',
    styleUrls: ['./casal-cadastro.component.css'],
    providers: [MessageService]
})
export class CasalCadastroComponent implements OnInit {

    casal = new Casal();
    headerPage = '';

    lareiras: Lareira[];
    filhos = [];
    columns: any[];

    constructor(
        private casalService: CasalService,
        private route: ActivatedRoute,
        private messageService: MessageService,
        private errorHandler: ErrorHandlerService,
        private router: Router,
        private lareiraService: LareiraService
    ) { }

    ngOnInit() {
        this.columns = [
            { field: 'nome', header: 'Nome' },
            { field: 'sexo', header: 'Gênero' },
            { field: 'dataNascimento', header: 'Data Nascimento' }
        ];

        // this.configurarFormulario();

        const idCasal = +this.route.snapshot.paramMap.get('idCasal');

        this.headerPage = 'Novo Casal';

        // Protege caso não seja retornado o código
        if (idCasal) {
            this.headerPage = 'Alterar Casal';
            this.casalService.getCasal(idCasal).subscribe(casal => this.casal = casal);
            // this.casalService.getCasal(idCasal).subscribe(casal => this.casal = casal);

            // this.casalService.getCasalByPromise(idCasal)
            //     .then(casal => {
            //         this.formulario.patchValue(casal);
            //     })
            //     .catch(erro => this.errorHandler.handle(erro));
        }

        this.carregarLareiras();
    }

    // configurarFormulario() {
    //     this.formulario = this.formBuilder.group({
    //         idCasal: [],
    //         lareira: this.formBuilder.group({
    //             idLareira: [null, Validators.required],
    //             nome: []
    //         }),
    //         maridoNome: ['', Validators.compose([this.validarObrigatoriedade, this.validarTamanhoMinimo(5)])],
    //         // maridoNome: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
    //         maridoSobrenome: [],
    //         maridoDataNascimento: [],
    //         maridoProfissao: [],
    //         maridoTelCelular: [],
    //         maridoEmail: [],
    //         maridoProblemaSaude: [],
    //         esposaNome: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
    //         esposaSobrenome: [''],
    //         esposaDataNascimento: [],
    //         esposaProfissao: [''],
    //         esposaTelCelular: [''],
    //         esposaEmail: [''],
    //         esposaProblemaSaude: [''],
    //     });
    // }

    validarObrigatoriedade(input: FormControl) {
        return (input.value ? null : { obrigatoriedade: true });
    }

    validarTamanhoMinimo(valor: number) {
        return (input: FormControl) => {
            return (!input.value || input.value.length >= valor) ? null : { tamanhoMinimo: { tamanho: valor } };
        };
    }

    validarTamanhoMaximo(valor: number) {
        return (input: FormControl) => {
            return (!input.value || input.value.length <= valor) ? null : { tamanhoMaximo: { tamanho: valor } };
        };
    }

    carregarLareiras() {
        return this.lareiraService.pesquisar()
            .then(lareiras => {
                this.lareiras = lareiras
                    .map(c => ({ label: c.nome, value: c.idLareira }));
            })
            .catch(erro => this.errorHandler.handle(erro));
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

                this.messageService.add({ severity: 'success', detail: 'Casal alterado com sucesso!' });
                this.router.navigate(['/casal']);
            })
            .catch(erro => this.errorHandler.handle(erro));
    }

    inserirCasal(form: FormControl) {
        this.casalService.adicionar(this.casal)
            .then(casalAdicionado => {
                this.messageService.add({ severity: 'success', detail: 'Casal adicionado com sucesso!' });
                this.router.navigate(['/casal']);
            })
            .catch(erro => this.errorHandler.handle(erro));
    }

}
