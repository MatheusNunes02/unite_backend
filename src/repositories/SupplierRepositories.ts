import {EntityRepository, Repository} from 'typeorm';

import { Supplier } from '../entities/Supplier';

@EntityRepository(Supplier)
class SupplierRepositories extends Repository<Supplier>{

}

export {SupplierRepositories}