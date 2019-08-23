import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Filho } from './../../core/model';

@Component({
    selector: 'app-casal-cadastro-filho',
    templateUrl: './casal-cadastro-filho.component.html',
    styleUrls: ['./casal-cadastro-filho.component.css']
})
export class CasalCadastroFilhoComponent implements OnInit {

    @Input() filhos: Array<Filho>;
    filho: Filho;
    exbindoFormularioFilho = false;
    filhoIndex: number;

    constructor() { }

    ngOnInit() {
    }

    prepararNovoFilho() {
        this.exbindoFormularioFilho = true;
        this.filho = new Filho();
        this.filhoIndex = this.filhos.length;
    }

    prepararEdicaoFilho(filho: Filho, index: number) {
        this.filho = this.clonarFilho(filho);
        this.exbindoFormularioFilho = true;
        this.filhoIndex = index;
    }

    confirmarFilho(frm: FormControl) {
        this.filhos[this.filhoIndex] = this.clonarFilho(this.filho);

        this.exbindoFormularioFilho = false;

        frm.reset();
    }

    removerFilho(index: number) {
        this.filhos.splice(index, 1);
    }

    clonarFilho(filho: Filho): Filho {
        return new Filho(filho.idFilho, filho.nome, filho.sexo, filho.dataNascimento);
    }

    get editando() {
        return this.filho && this.filho.idFilho;
    }

}
