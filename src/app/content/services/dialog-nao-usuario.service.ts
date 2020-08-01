import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DialogNaoUsuarioService {

  fecharDialogSubject: Subject<any> = new Subject<any>();

  constructor() { }
}
