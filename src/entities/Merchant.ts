import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid} from 'uuid';

@Entity('merchants')
class Merchant {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    cpf: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    foto: string;

    @Column()
    cep: string;

    @Column()
    bairro: string;

    @Column()
    endereco: string;

    @Column()
    sobre_mim:string;

    @Column()
    telefone:string;

    @Column()
    status: number;

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

export { Merchant }