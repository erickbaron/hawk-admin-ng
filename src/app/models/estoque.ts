import { Empresa } from './empresa';
import { Produto } from './produto';


export class Estoque {
    id: number;
    produto: Produto;
    empresa: Empresa;
    quantidade: number;
    tipo: boolean;
    data_entrada: string;
    registro_ativo: boolean;
}