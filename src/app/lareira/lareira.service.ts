import { Lareira } from './../core/model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LareiraService {

    lareiraUrl = 'http://localhost:8080/lareiras';

    constructor(private http: HttpClient) { }

    pesquisar(): Promise<any> {
        const params = new URLSearchParams();
        const headers = new HttpHeaders().set('Authorization', 'Basic YWRtaW5AYWRtaW4uY29tOmFkbWlu');

        return this.http.get(`${this.lareiraUrl}`,
            { headers })
            .toPromise()
            .then(response => response);
    }

    getLareira(idLareira: number): Observable<Lareira> {
        const headers = new HttpHeaders().set('Authorization', 'Basic YWRtaW5AYWRtaW4uY29tOmFkbWlu');
        const url = `${this.lareiraUrl}/${idLareira}`;
        return this.http.get<Lareira>(url, { headers });
    }

    adicionar(lareira: Lareira): Promise<Lareira> {
        const headers = new HttpHeaders().set('Authorization', 'Basic YWRtaW5AYWRtaW4uY29tOmFkbWlu');
        return this.http.post<Lareira>(this.lareiraUrl, lareira, { headers })
            .toPromise();
    }

    atualizar(lareira: Lareira): Promise<Lareira> {
        const headers = new HttpHeaders().set('Authorization', 'Basic YWRtaW5AYWRtaW4uY29tOmFkbWlu');
        return this.http.put<Lareira>(`${this.lareiraUrl}/${lareira.idLareira}`, lareira, { headers })
            .toPromise();
    }

    excluir(codigo: number): Promise<void> {
        const headers = new HttpHeaders().set('Authorization', 'Basic YWRtaW5AYWRtaW4uY29tOmFkbWlu');
        return this.http.delete(`${this.lareiraUrl}/${codigo}`, { headers })
            .toPromise()
            .then(() => null);
    }
}
