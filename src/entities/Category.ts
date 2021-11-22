import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany } from "typeorm";
import { v4 as uuid} from 'uuid';
import { Supplier} from './Supplier'

@Entity('categories')
class Category {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    category_name: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export { Category}