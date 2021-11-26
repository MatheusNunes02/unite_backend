import { getCustomRepository } from "typeorm";
import { AvaliacaoRepositories } from "../repositories/AvaliacaoRepositories";


interface IAvaliacaoRequest{
    supplier_id: string;
    merchant_id:string;
    comment:string;
    nota:number;
    type:number;
}

class CreateAvaliacaoService{
    async execute(
        {
            supplier_id,
            merchant_id,
            comment,
            nota,
            type,
        }:IAvaliacaoRequest
    ){
        const avaliacaoRepositories = getCustomRepository(AvaliacaoRepositories);

        const avaliacaoAlreadyExists = await avaliacaoRepositories.findOne({
            supplier_id,
            merchant_id,
            type
        })

        if(avaliacaoAlreadyExists){
            throw new Error('Avaliação já feita')
        }

        const palavrasFeias = [
            'arrombado',
            'merdinha',
            'canalha',
            'vagabundo',
            'seboso',
            'piranha',
            'demonio',
            'desgraça',
            'desgraçado',
            'vsf',
            'boi',
            'caralho',
            'pau no cu',
            'cu',
            'demônio',
            'puta',
            'fuder',
            'buceta',
            'rola',
            'cacete',
            'fodido'
        ]

        for(let i=0;i<palavrasFeias.length;i++){
            if(comment.toLowerCase().includes(palavrasFeias[i])){
                throw new Error('NÃO PODE USAR PALAVÃO MIZERIA!')
            }
        }

        if(nota<0 || nota>5){
            throw new Error('Notas só podem variar entre 1 e 5');
        }

        if(type<1 || type>2){
            throw new Error('Tipo errado');
        }

        const avaliacao = avaliacaoRepositories.create({
            supplier_id,
            merchant_id,
            comment,
            nota,
            type
        })

        avaliacaoRepositories.save(avaliacao);

        return avaliacao;

    }
}

export { CreateAvaliacaoService }