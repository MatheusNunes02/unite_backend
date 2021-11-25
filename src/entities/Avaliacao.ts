import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid} from 'uuid';
import { Supplier} from './Supplier'
import { Merchant } from "./Merchant";

@Entity('avaliacao')
class Avaliacao{

    @PrimaryColumn()
    readonly id: string;

    @Column()
    supplier_id:string;

    @JoinColumn({name:'supplier_id'})
    @ManyToOne(()=> Supplier)
    supplierId: Supplier

    @Column()
    merchant_id:string;

    @JoinColumn({name:'merchant_id'})
    @ManyToOne(()=> Merchant)
    merchantId: Merchant

    @Column()
    comment:string;

    @Column()
    nota:number;

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

export {Avaliacao}

// Coluna type quer dizer para quem está sendo enviada a avaliação
// type 1 Comerciante avaliando um Fornecedor
// type 2 Fornecedor avaliando um Comerciante