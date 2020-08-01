import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsuarioService} from "../../../services/usuario.service";
import {Usuario} from "../../../models/usuario";
import {MessageService} from "../../../../core/services/message.service";
import {PerfilUsuarioEnum} from "../../../models/perfil-usuario.enum";
import {MatButton} from "@angular/material/button";
import {AuthService} from "../../../../core/authentication/auth.service";
import {DialogNaoUsuarioService} from "../../../services/dialog-nao-usuario.service";
import {take} from "rxjs/operators";
import {AuthToken} from "../../../../core/authentication/auth-token";

@Component({
  selector: 'app-adicionar-usuario',
  templateUrl: './adicionar-usuario.component.html',
  styleUrls: ['./adicionar-usuario.component.scss']
})
export class AdicionarUsuarioComponent implements OnInit {

  @ViewChild('btnSalvar', {static: true}) btnSalvar: MatButton;

  form: FormGroup;
  isInvalid: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private usuarioService: UsuarioService,
              private messageService: MessageService,
              private authService: AuthService,
              private fecharDialogService: DialogNaoUsuarioService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.required,
        Validators.maxLength(20), Validators.minLength(8)])],
      confirmarSenha: ['', Validators.compose([Validators.required,
        Validators.maxLength(20), Validators.minLength(8)])]
    });

    this.validarForm();
  }

  validarForm() {
    this.form.valueChanges.subscribe(data => {
      if (data.senha !== '' && data.confirmarSenha !== '' && data.confirmarSenha !== data.senha) {
        this.isInvalid = true;
      } else {
        this.isInvalid = false;
      }
    });
  }

  salvar() {
    const usuario = Usuario.handleUser(this.form.value, {id: 2 , nome: PerfilUsuarioEnum.VISITANTE});
    this.usuarioService.save(usuario)
      .subscribe((data: any) => {
        if(data.salvo){
          this.messageService.showMessageSucessfull(data.mensagem);
          this.realizarLoginFecharModal(usuario);
        } else {
          this.messageService.showMessageInfo(data.mensagem);
        }
      }, error => this.messageService.showMessageError('Erro ao criar novo usuário.'));
  }

  realizarLoginFecharModal(usuario: Usuario) {
    this.authService.login(usuario).pipe(take(1)).subscribe((token: AuthToken) => {
      this.authService.setAuthToken(token);
      this.usuarioService.findById(usuario.email).pipe(take(1)).subscribe((usuario: Usuario) => {
        this.authService.setAuthDataAndRedirect(usuario);
        this.form.reset();
        this.fecharDialogService.fecharDialogSubject.next(true);
      });
    }, error => this.messageService.showMessageInfo('Credenciais inválidas ou Usuário inativo!'));

  }


}
