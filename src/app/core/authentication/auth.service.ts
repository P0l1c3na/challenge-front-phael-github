import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {Usuario} from "../../content/models/usuario";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthToken} from "./auth-token";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private modoSalvandoUser = false;

  constructor(private router: Router,
              private httpClient: HttpClient) {
  }

  login(usuario: any) {

    const params = new URLSearchParams();
    params.append('grant_type', 'password');
    params.append('username', usuario.email);
    params.append('password', usuario.senha);
    const authorization = 'Basic ' + btoa(environment.client_id + ':' + environment.client_secret);
    const headers =
      new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
        Authorization: authorization
      });

    return this.httpClient.post(`${environment.api_url}/oauth/token`,
      params.toString(), {headers});
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  updateInfo(usuario: Usuario) {
    sessionStorage.setItem(environment.auth_key_storage, JSON.stringify(usuario));
  }

  setAuthDataAndRedirect(usuario: Usuario) {
    sessionStorage.setItem(environment.auth_key_storage, JSON.stringify(usuario));
    this.router.navigate(['/manutencao-usuario']);
  }

  setAuthToken(authToken: AuthToken) {
    sessionStorage.setItem(environment.auth_token_key_sotorage, JSON.stringify(authToken));
  }

  getauthData() {
    return JSON.parse(sessionStorage.getItem(environment.auth_key_storage));
  }

  getUserToken() {
    const token = JSON.parse(sessionStorage.getItem(environment.auth_token_key_sotorage));
    return token != null ? token.access_token : null;
  }

  getAuthUserEmail() {
    return JSON.parse(sessionStorage.getItem(environment.auth_key_storage)).email;
  }

  isAuthenticated(): boolean {
    return this.getauthData() !== null && this.getauthData() !== undefined;
  }

  clearSession() {
    sessionStorage.clear();
  }

 set setModoCriandoUser(valor: boolean){
    this.modoSalvandoUser = valor;
 }

 get getModoCriandoUser(){
    return this.modoSalvandoUser;
 }

}
