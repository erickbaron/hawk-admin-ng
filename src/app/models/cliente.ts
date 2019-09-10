import { Login } from './login';
import { Cidade } from './cidade';


export class Cliente {
     id: number;
     nome: string;
     cpf: string;
     data_nascimento: string;
     numero: number;
     complemento: string;
     logradouro: string;
     cep: string;
     celular: string;
     registro_ativo: boolean;
     login: Login;
     cidade: Cidade;
}