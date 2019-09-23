import { Usuario } from './usuario';


export class Empresa {
    id: number;
    nome: string;
    cnpj: string;
    telefone: string;
    ramo: string;
    registroAtivo: boolean;
    usuarioId: Usuario;
}