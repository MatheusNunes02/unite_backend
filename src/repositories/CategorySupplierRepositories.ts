import {EntityRepository, Repository} from 'typeorm';

import { CategorySupplier } from '../entities/CategorySupplier';

@EntityRepository(CategorySupplier)
class CategorySupplierRepositories extends Repository<CategorySupplier>{

}

export {CategorySupplierRepositories}