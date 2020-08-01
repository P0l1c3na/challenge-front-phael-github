import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../authentication/auth.service";
import {PerfilUsuarioEnum} from "../../content/models/perfil-usuario.enum";

@Injectable({
  providedIn: 'root'
})
export class RelatorioGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAutenticado();
  }

  private isAutenticado(): boolean{
    if(this.authService.getauthData().perfil.nome === PerfilUsuarioEnum.ADMINISTRADOR && this.authService.isAuthenticated()){
      return true;
    } else {
      this.router.navigate(['/manutencao-usuario']);
      return false;
    }
  }

}
