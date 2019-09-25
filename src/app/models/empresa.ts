import { Usuario } from './usuario';


export class Empresa {
    id: number;
    nome: string;
    cnpj: string;
    telefone: string;
    ramo: string;
    cep: string;
    logradouro: string;
    complemento: string;
    numero: string;
    cidade: string;
    estado: string;

    registroAtivo: boolean;
    usuarioId: Usuario;
}