import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn,JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuid} from 'uuid';
import { Category } from "./Category";
import { Supplier} from './Supplier'

@Entity('category_suppliers')
class CategorySupplier{

    @PrimaryColumn()
    readonly id: string;

    @Column()
    category_id: string;

    @JoinColumn({name:"category_id"})
    @ManyToOne(() => Category)
    categoryId: Category


    @Column()
    supplier_id: string;

    @JoinColumn({name:'supplier_id'})
    @ManyToOne(()=> Supplier)
    supplierId: Supplier

    @Column()
    status: Boolean;

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

export { CategorySupplier }