import { Categoria } from './categoria';
import { AvaliacaoProduto } from './avaliacao-produto';
import { Empresa } from './empresa';


export class Produto {
    id: number;
    nome: string;
    valorCusto: number;
    valorVenda: number;
    descricao: string;
    peso: number;
    altura: number;
    largura: number;
    comprimento: number;
    registroAtivo: boolean;
    promocao: boolean;
    nomeArquivo: string; 
    empresaId: Empresa;
    categoriaId: number;
    categoria: Categoria;
    
}