import {EntityRepository, Repository} from 'typeorm';

import { Avaliacao } from '../entities/Avaliacao';

@EntityRepository(Avaliacao)
class AvaliacaoRepositories extends Repository<Avaliacao>{

}

export {AvaliacaoRepositories}