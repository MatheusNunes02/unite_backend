import {EntityRepository, Repository} from 'typeorm';

import { Category } from '../entities/Category';

@EntityRepository(Category)
class CategoryRepositories extends Repository<Category>{

}

export {CategoryRepositories}