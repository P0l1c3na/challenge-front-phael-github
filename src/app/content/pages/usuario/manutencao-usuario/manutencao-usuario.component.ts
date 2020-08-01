import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../../core/authentication/auth.service";
import {MatDialogModule} from "@angular/material/dialog";
import {Usuario} from "../../../models/usuario";
import {PerfilUsuarioEnum} from "../../../models/perfil-usuario.enum";

@Component({
  selector: 'app-manutencao-usuario',
  templateUrl: './manutencao-usuario.component.html',
  styleUrls: ['./manutencao-usuario.component.scss']
})
export class ManutencaoUsuarioComponent implements OnInit {
  mostrarManutencaoAdmin: boolean = false;
  private usuario: Usuario;
  constructor(private authService: AuthService,
              private dialog: MatDialogModule) { }

  ngOnInit() {
    this.usuario = this.authService.getauthData();
    this.mostrarManutencaoAdmin = this.usuario.perfil.nome === PerfilUsuarioEnum.ADMINISTRADOR;
  }

}
