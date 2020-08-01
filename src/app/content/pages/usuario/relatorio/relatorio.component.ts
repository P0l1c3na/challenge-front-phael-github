import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss']
})
export class RelatorioComponent implements OnInit {

  qtdTotalDeUsuarios: number = 0;
  qtdUsuariosFiltrados: string = '';

  constructor() { }

  ngOnInit() {
  }

  onUsuariosTotal(value){
    this.qtdTotalDeUsuarios = value;
  }

  onUsuariosFiltrado(value){
    this.qtdUsuariosFiltrados = value;
  }

}
