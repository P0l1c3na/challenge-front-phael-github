import { Injectable } from '@angular/core';
import {AbstractHttpService} from "../../core/services/abstract-http.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Usuario} from "../models/usuario";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends AbstractHttpService<Usuario>{

  constructor(private http: HttpClient) {
    super(http, `${environment.api_url}/usuario`);
  }

  save(record: Usuario): Observable<Object> {
    return this.http.post(`${environment.api_url}/usuario/salvar`, record);
  }
}
