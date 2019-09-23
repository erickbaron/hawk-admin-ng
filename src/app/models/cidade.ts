import { Estado } from './estado';


export class Cidade {
    id: number;
    nome: string;
    registroAtivo: boolean;
    estado: Estado;
}