import { Usuario } from './usuario';
import { Empresa } from './empresa';


export class Administrador {
    id: number;
    nome: string;
    email: string;
    senha: string;
    registroAtivo: boolean;
    login: Usuario;
    empresa: Empresa;
}