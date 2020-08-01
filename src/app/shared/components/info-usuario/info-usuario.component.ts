import {Component, OnInit} from '@angular/core';
import {Usuario} from "../../../content/models/usuario";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../core/authentication/auth.service";
import {UsuarioService} from "../../../content/services/usuario.service";
import {MessageService} from "../../../core/services/message.service";
import {PerfilUsuarioEnum} from "../../../content/models/perfil-usuario.enum";
import {PerfilUsuario} from "../../../content/models/perfil-usuario";

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.scss']
})
export class InfoUsuarioComponent implements OnInit {

  usuario: Usuario;
  form: FormGroup
  salvando = false;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private usuarioService: UsuarioService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.usuario = this.authService.getauthData();
    this.form = this.formBuilder.group({
      nome: [this.usuario.nome, Validators.compose([Validators.maxLength(50), Validators.required])],
      email: [{value: this.usuario.email, disabled: true}],
      senha: [{value: this.usuario.senha, disabled: true}],
      perfil: [{
        value: this.usuario.perfil.id,
        disabled: this.usuario.perfil.nome === PerfilUsuarioEnum.VISITANTE
      }, Validators.required],
      ativo: [this.usuario.ativo, Validators.required],
      telefone: [this.usuario.telefone, Validators.compose([Validators.maxLength(16),
        Validators.minLength(10)])],
      cep: [this.usuario.cep, Validators.compose([Validators.minLength(8),
        Validators.maxLength(8)])],
      endereco: [this.usuario.endereco, Validators.compose([Validators.maxLength(50)])],
    });

  }

  salvar() {
    this.salvando = true;
    const user: Usuario = this.getInformacoes(this.form.value);
    this.usuarioService.update(user).subscribe((data: any) => {
      this.authService.updateInfo(user);
      this.messageService.showMessageInfo(data.mensagem);
      this.salvando = false;
    }, error => {
      this.messageService.showMessageError('Erro ao atualizar as informações...');
    });
  }

  getInformacoes(formValues) {
    return {
      perfil: formValues.perfil === undefined ? this.getPerfil(this.usuario.perfil.id) : this.getPerfil(formValues.perfil),
      email: this.usuario.email,
      nome: formValues.nome,
      ativo: formValues.ativo,
      cep: formValues.cep,
      endereco: formValues.endereco,
      telefone: formValues.telefone,
      senha: this.usuario.senha,
      datdataDeCadastro: this.usuario.dataDeCadastro
    };
  }

  getPerfil(id){
    return id === 1 ? new PerfilUsuario(id, PerfilUsuarioEnum.ADMINISTRADOR) :
      new PerfilUsuario(id, PerfilUsuarioEnum.VISITANTE);
  }
}
