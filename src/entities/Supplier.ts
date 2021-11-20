import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid} from 'uuid';

@Entity('suppliers')
class Supplier {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    nome_empresa:string;

    @Column()
    email: string;

    @Column()
    cnpj: string;

    @Column()
    status: number;

    @Column()
    descricao: string;

    @Column()
    foto: string;

    @Column()
    cep: string;

    @Column()
    endereco: string;

    @Column()
    bairro: string;

    @Column()
    numero_endereco: string;

    @Column()
    password: string;

    @Column()
    telefone:string;

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

export { Supplier}