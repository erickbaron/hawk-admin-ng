import { Empresa } from './empresa';
import { Compra } from './compra';


export class Financa {
    id: number;
    mes: number;
    valorCusto: number;
    valorVenda: number;
    valorLucro: number;
    registroAtivo: boolean;
    empresa: Empresa;
    compra: Compra;
}