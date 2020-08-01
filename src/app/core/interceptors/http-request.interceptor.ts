import {Injectable} from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest, HttpHeaders, HttpResponse, HttpErrorResponse,
} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {MessageService} from "../services/message.service";
import {AuthService} from "../authentication/auth.service";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class HttpsRequestInterceptor implements HttpInterceptor {


  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {

    const dupReq = req.clone({
      headers: this.getHeaders()
    });

    return next.handle(dupReq).pipe(
      tap(evt => {
        if (evt instanceof HttpResponse) {
          if (evt.body && evt.body.success) {
            console.log('sucess');
          }
        }
      }),
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            // fazer login de novo
            this.msgService.showMessageInfo('Credenciais inválidas...')
            this.authService.logout();
          } else if (err.status === 400 && err.message.includes('/challenge-phael/api/oauth/token')){
            this.msgService.showMessageInfo('Credenciais inválidas! Por favor, verifique as informações.')
          }
          else {
            console.log(err);
            this.msgService.showMessageError(`Erro inesperado: ${err.status} - ${err.message}`)
          }
        }
        return of(err);
      }));
  }

  constructor(private authService: AuthService,
              private router: Router,
              private msgService: MessageService) {
  }

  getHeaders() {
    let headers;
    if (this.authService.getUserToken() == null && !this.authService.getModoCriandoUser) {
      headers = new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
        Authorization: 'Basic ' + btoa(environment.client_id + ':' + environment.client_secret)
      });
    } else {
      headers = new HttpHeaders({
        Authorization: `Bearer ${this.authService.getUserToken()}`
      });
    }
    return headers;
  }

}
