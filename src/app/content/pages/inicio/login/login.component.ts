import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AdicionarUsuarioComponent} from "../adicionar-usuario/adicionar-usuario.component";
import {Router} from "@angular/router";
import {UsuarioService} from "../../../services/usuario.service";
import {Usuario} from "../../../models/usuario";
import {HttpErrorResponse} from "@angular/common/http";
import {MessageService} from "../../../../core/services/message.service";
import {AuthService} from "../../../../core/authentication/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DialogNaoUsuarioService} from "../../../services/dialog-nao-usuario.service";
import {take, tap} from "rxjs/operators";
import {AuthToken} from "../../../../core/authentication/auth-token";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isActive = false;
  form: FormGroup;

  constructor(public dialog: MatDialog,
              private router: Router,
              private usuarioService: UsuarioService,
              private message: MessageService,
              private authService: AuthService,
              private formBuilder: FormBuilder,
              private fecharDialogService: DialogNaoUsuarioService) {
  }

  ngOnInit() {
    this.authService.clearSession();
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  login() {
    const user = {
      email: this.form.value.email,
      senha: this.form.value.senha
    }
    this.authService.login(user).pipe(take(1)).subscribe((token: AuthToken) => {
      this.authService.setAuthToken(token);
      this.usuarioService.findById(user.email).pipe(take(1)).subscribe((usuario: Usuario) => {
        this.authService.setAuthDataAndRedirect(usuario);
      });
    }, error => {
      this.message.showMessageInfo('Credenciais inválidas ou Usuário inativo!');
      console.log(error);
    });


  }

  showPassword() {
    this.isActive = !this.isActive;
  }

  aindaNaoSouUsuario() {
    const dialogRef = this.dialog.open(AdicionarUsuarioComponent, {
      minWidth: '30%'
    });

    this.fecharDialogService.fecharDialogSubject.subscribe(data => {
      dialogRef.close();
    });
  }

}
