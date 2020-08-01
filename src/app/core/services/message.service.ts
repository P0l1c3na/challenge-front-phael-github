import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private snackBar: MatSnackBar) {
  }

  showMessageError(message: string) {
    this.snackBar.open(message, 'OK', {
      duration: 5000,
      panelClass: ['errorSnack', 'butttonErrorSnack']
    });
  }


  showMessageSucessfull(message: string) {
    this.snackBar.open(message, 'OK', {
      duration: 3000,
      panelClass: ['sucessSnack', 'butttonSucessSnack']
    });
  }

  showMessageInfo(message: string) {
    this.snackBar.open(message, 'OK', {
      duration: 3000
    });
  }

  showStatusHttpMessage(message: string, status: number) {
    switch (status) {
      case 200:
        this.showMessageSucessfull('Sucesso!');
        break;
      case 201:
        this.showMessageSucessfull('Criado com sucesso!');
        break;
      case 400:
        this.showAlertMessage('Credenciais inválidas ou usuario inativo! Por favor tente novamente.');
        break;
      case 401:
        this.showAlertMessage('Você está sem permissão para acessar este recurso.');
        break;
      case 403:
        this.showWarnMessage('Não foi possivel acessar este recurso.');
        break;
      case 500:
        this.showMessageError('Ops, houve um erro no sistema! Entre em contato com o suporte.' + message);
        break;
    }
  }

  showWarnMessage(message: string) {
    this.snackBar.open(message, 'OK', {
      duration: 3000,
      panelClass: ['warningSnack', 'butttonWarningSnack']
    });
  }

  showAlertMessage(message: string) {
    this.snackBar.open(message, 'OK', {
      duration: 3000,
      panelClass: ['alertSnack',  'butttonAlertSnack']
    });
  }
}
