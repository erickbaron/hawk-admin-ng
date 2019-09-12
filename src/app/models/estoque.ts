import { Empresa } from './empresa';
import { Produto } from './produto';


export class Estoque {
    id: number;
    quantidade: number;
    tipo: boolean;
    data_entrada: string;
    registro_ativo: boolean;
    id_empresa: Empresa;
    id_produto: Produto;
}