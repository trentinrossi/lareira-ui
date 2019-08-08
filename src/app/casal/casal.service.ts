import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';
import { Casal } from './../core/model';
import { LareiraHttp } from './../seguranca/lareira-http';

@Injectable({
    providedIn: 'root'
})
export class CasalService {

    casalUrl: string;

    constructor(private http: LareiraHttp) {
        this.casalUrl = `${environment.apiUrl}/casais`;
    }

    pesquisar(): Promise<any> {
        return this.http.get(`${this.casalUrl}`)
            .toPromise()
            .then(response => response);
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
}
