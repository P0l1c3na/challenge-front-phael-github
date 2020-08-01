import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Usuario} from "../../models/usuario";
import {UsuarioService} from "../../services/usuario.service";
import {MessageService} from "../../../core/services/message.service";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {AuthService} from "../../../core/authentication/auth.service";
import {MatPaginator} from "@angular/material/paginator";
import {PerfilUsuario} from "../../models/perfil-usuario";
import {PerfilUsuarioEnum} from "../../models/perfil-usuario.enum";

@Component({
  selector: 'app-manutencao-usuario-admin',
  templateUrl: './manutencao-usuario-admin.component.html',
  styleUrls: ['./manutencao-usuario-admin.component.scss']
})
export class ManutencaoUsuarioAdminComponent implements OnInit {

  @Output() qtdTotalUsers: EventEmitter<number> = new EventEmitter<number>()
  @Output() qtdUsuariosFiltrados: EventEmitter<string> = new EventEmitter<string>()
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  dataSource: MatTableDataSource<Usuario>;
  isLoading: boolean = true;
  usuarios: Usuario[];
  displayedColumns: string[] = [
    'email', 'nome', 'perfil', 'ativo', 'cep', 'telefone'
  ];
  @Input() isModoRelatorio: boolean;

  constructor(private authService: AuthService,
              private userService: UsuarioService,
              private messageService: MessageService) {

  }

  ngOnInit() {
    this.carregarUsuarios();
  }

  carregarUsuarios() {
    this.userService.list().subscribe((data: Usuario[]) => {
      if (this.isModoRelatorio) {
        this.usuarios = data;
      } else {
        this.usuarios = data.filter(u => u.email !== this.authService.getAuthUserEmail());
      }
      this.qtdTotalUsers.emit(this.usuarios.length);
      this.setDataSource();
    });
  }

  setDataSource() {
    this.dataSource = new MatTableDataSource<Usuario>(this.usuarios);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.isLoading = false;
  }

  alterarStatus(usuario, event) {
    this.exibirBarraLoading();
    usuario.ativo = event.checked;
    this.userService.update(this.handleUser(usuario)).subscribe(data => {
      this.messageService.showMessageSucessfull(`O status do usuário ${usuario.nome} foi alterado para
      ${event.checked ? 'ATIVO' : 'INATIVO'}!`);
      this.exibirBarraLoading();
    }, error => {
      this.messageService.showMessageError(`Erro ao alterar o status do usuário ${usuario.nome}...`);
    });
  }

  alterarPefil(usuario, event) {
    this.exibirBarraLoading();
    usuario.perfil = new PerfilUsuario(event.value);
    this.userService.update(this.handleUser(usuario)).subscribe((data: Usuario) => {
      this.messageService.showMessageSucessfull(`O Perfil do usuário ${usuario.nome} foi alterado para
      ${event.value === 1 ? 'ADMINISTRADOR' : 'VISITANTE'}!`);
      this.exibirBarraLoading();
    }, error => {
      this.messageService.showMessageError(`Erro ao alterar o perfil do usuário ${usuario.nome}...`);
    });
  }

  exibirBarraLoading(){
    this.isLoading = !this.isLoading;
  }

  filtrarAtivoInativo(event) {
    this.isLoading = true;
    this.userService.list().subscribe((users: Usuario[]) => {
      let usersFiltrados: Usuario[] = [];
      if (this.isModoRelatorio) {
        usersFiltrados = users;
      } else {
        usersFiltrados = users.filter(u => u.email !== this.authService.getAuthUserEmail());
      }

      switch (event.value) {
        case 'ATIVOS':
          this.usuarios = usersFiltrados.filter(u => u.ativo === true);
          this.setDataSource();
          this.qtdUsuariosFiltrados.emit(` ativos: ${this.usuarios.length}`);
          break;
        case 'INATIVOS':
          this.usuarios = usersFiltrados.filter(u => u.ativo === false);
          this.qtdUsuariosFiltrados.emit(` inativos: ${this.usuarios.length}`);
          this.setDataSource();
          break;
        default:
          this.usuarios = usersFiltrados;
          this.qtdUsuariosFiltrados.emit(``);
          this.setDataSource();
          break;
      }
      this.isLoading = false;
    });
  }

  handleUser(valores: any): Usuario {
    return {
      perfil: valores.perfil,
      email: valores.email,
      nome: valores.nome,
      ativo: valores.ativo,
      senha: valores.senha,
      dataDeCadastro: valores.dataDeCadastro,
      cep: valores.cep === undefined ? '' : valores.cep,
      endereco: valores.endereco === undefined ? '' : valores.endereco,
      telefone: valores.telefone === undefined ? '' : valores.telefone
    };
  }
}
