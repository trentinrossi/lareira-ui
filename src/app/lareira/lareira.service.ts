import { environment } from './../../environments/environment';
import { LareiraHttp } from './../seguranca/lareira-http';
import { Lareira } from './../core/model';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LareiraService {

    lareiraUrl: string;

    constructor(private http: LareiraHttp) {
        this.lareiraUrl = `${environment.apiUrl}/lareiras`;
    }

    pesquisar(): Promise<any> {
        return this.http.get(`${this.lareiraUrl}`)
            .toPromise()
            .then(response => response);
    }

    getLareira(idLareira: number): Observable<Lareira> {
        const url = `${this.lareiraUrl}/${idLareira}`;
        return this.http.get<Lareira>(url);
    }

    adicionar(lareira: Lareira): Promise<Lareira> {
        return this.http.post<Lareira>(this.lareiraUrl, lareira)
            .toPromise();
    }

    atualizar(lareira: Lareira): Promise<Lareira> {
        return this.http.put<Lareira>(`${this.lareiraUrl}/${lareira.idLareira}`, lareira)
            .toPromise();
    }

    excluir(codigo: number): Promise<void> {
        return this.http.delete(`${this.lareiraUrl}/${codigo}`)
            .toPromise()
            .then(() => null);
    }
}
