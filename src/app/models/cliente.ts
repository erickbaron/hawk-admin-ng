import { Usuario } from './usuario';
import { Cidade } from './cidade';


export class Cliente {
     id: number;
     nome: string;
     cpf: string;
     dataNascimento: string;
     numero: number;
     complemento: string;
     logradouro: string;
     cep: string;
     celular: string;
     registroAtivo: boolean;
     login: Usuario;
     cidade: Cidade;
}