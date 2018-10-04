import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Injectable } from '@angular/core';
import { Usuario } from "../model/usuario";

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    })
  };


@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {

    private registerLogin= "http://localhost:8080/autenticacao/usuarios/logar";

    handleError: any;

    constructor(private http: HttpClient) { }
    
    logar(usuario: Usuario): Observable<Usuario>{
        return this.http.post<Usuario>(this.registerLogin, usuario)
          .pipe(
            catchError(this.handleError)
          );
      }
}