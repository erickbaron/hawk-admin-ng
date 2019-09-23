import { Cliente } from './cliente';


export class Cartao {
    id: number;
    numeroCartao: string;
    vencimentoCartao: string;
    nomeCartao: string;
    cvcCartao: number;
    registro_ativo: boolean;
    cliente: Cliente;
}