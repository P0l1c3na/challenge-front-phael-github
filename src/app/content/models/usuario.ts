import {PerfilUsuarioEnum} from "./perfil-usuario.enum";
import {PerfilUsuario} from "./perfil-usuario";

export class Usuario {
  email;
  nome;
  ativo;
  perfil: PerfilUsuario;
  senha?;
  cep?;
  telefone?;
  endereco?;
  dataDeCadastro?;

  static handleUser(valores: any, perfil: PerfilUsuario): Usuario {
    return {
      perfil: perfil,
      email: valores.email,
      nome: valores.nome,
      ativo: true,
      senha: valores.senha,
      cep: valores.cep === undefined ? '' : valores.cep,
      endereco: valores.endereco === undefined ? '' : valores.endereco,
      telefone: valores.telefone === undefined ? '' : valores.telefone
    };
  }
}
