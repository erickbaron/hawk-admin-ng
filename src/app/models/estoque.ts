import { Empresa } from './empresa';
import { Produto } from './produto';


export class Estoque {
    id: number;
    produto: Produto;
    produtoId: number;
    empresaId: Empresa;
    empresa: Empresa;
    quantidade: number;
    entrada: string;
    dataEntrada: Date;
    registroAtivo: boolean;
}