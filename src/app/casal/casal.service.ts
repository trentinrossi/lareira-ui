import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import * as moment from 'moment';

import { environment } from './../../environments/environment';
import { Casal, Filho } from './../core/model';
import { LareiraHttp } from './../seguranca/lareira-http';
import { HttpParams } from '@angular/common/http';

export class Filtro {
    glogalFilter: string;
    pagina = 0;
    itensPorPagina = 5;
}

@Injectable({
    providedIn: 'root'
})
export class CasalService {

    casalUrl: string;

    constructor(private http: LareiraHttp) {
        this.casalUrl = `${environment.apiUrl}/casais`;
    }

    pesquisar(filtro: Filtro): Promise<any> {
        let params = new HttpParams({
            fromObject: {
                page: filtro.pagina.toString(),
                size: filtro.itensPorPagina.toString()
            }
        });

        if (filtro.glogalFilter) {
            params = params.append('globalFilter', filtro.glogalFilter);
        }

        return this.http.get<any>(`${this.casalUrl}`, { params })
            .toPromise()
            .then(response => {
                const casais = response.content;
                const resultado = {
                    casais,
                    total: response.totalElements
                };

                return resultado;
            });
    }


    getCasalByPromise(idCasal: number): Promise<Casal> {
        return this.http.get<Casal>(`${this.casalUrl}/${idCasal}`)
            .toPromise()
            .then(response => {
                const casal = response;

                this.converterStringsParaDatas([casal]);
                this.converterStringsParaFilhos(casal.filhos);

                return casal;
            });
    }

    getCasal(idCasal: number): Observable<Casal> {
        const url = `${this.casalUrl}/${idCasal}`;
        return this.http.get<Casal>(url);
    }

    adicionar(casal: Casal): Promise<Casal> {
        return this.http.post<Casal>(this.casalUrl, casal)
            .toPromise();
    }

    atualizar(casal: Casal): Promise<Casal> {
        return this.http.put<Casal>(`${this.casalUrl}/${casal.idCasal}`, casal)
            .toPromise();
    }

    excluir(codigo: number): Promise<void> {
        return this.http.delete(`${this.casalUrl}/${codigo}`)
            .toPromise()
            .then(() => null);
    }

    private converterStringsParaDatas(casais: Casal[]) {
        for (const casal of casais) {
            casal.maridoDataNascimento = moment(casal.maridoDataNascimento, 'YYYY-MM-DD').toDate();
            casal.esposaDataNascimento = moment(casal.esposaDataNascimento, 'YYYY-MM-DD').toDate();

            if (casal.maridoDataNascimento) {
                casal.maridoDataNascimento = moment(casal.maridoDataNascimento, 'YYYY-MM-DD').toDate();
            }

            if (casal.esposaDataNascimento) {
                casal.esposaDataNascimento = moment(casal.esposaDataNascimento, 'YYYY-MM-DD').toDate();
            }
        }
    }

    private converterStringsParaFilhos(filhos: Filho[]) {
        for (const f of filhos) {
            f.dataNascimento = moment(f.dataNascimento, 'YYYY-MM-DD').toDate();

            if (f.dataNascimento) {
                f.dataNascimento = moment(f.dataNascimento, 'YYYY-MM-DD').toDate();
            }
        }
    }
}
