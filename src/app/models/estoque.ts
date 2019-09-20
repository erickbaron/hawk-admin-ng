import { Empresa } from './empresa';
import { Produto } from './produto';


export class Estoque {
    id: number;
    produtoId: Produto;
    empresaId: Empresa;
    quantidade: number;
    entrada: boolean;
    dataEntrada: string;
    registroAtivo: boolean;
}