import {EntityRepository, Repository} from 'typeorm';

import { Merchant } from '../entities/Merchant';

@EntityRepository(Merchant)
class MerchantRepositories extends Repository<Merchant>{

}

export {MerchantRepositories}