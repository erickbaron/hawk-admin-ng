import { Categoria } from './categoria';
import { AvaliacaoProduto } from './avaliacao-produto';
import { Empresa } from './empresa';


export class Produto {
    id: number;
    nome: string;
    valor_custo: number;
    promocao: boolean;
    valor_venda: number;
    descricao: string;
    peso: number;
    altura: number;
    largura: number;
    comprimento: number;
    registro_ativo: boolean;
    empresaId: Empresa;
    categoriaId: Categoria;
    avaliacao_produto: AvaliacaoProduto;
}