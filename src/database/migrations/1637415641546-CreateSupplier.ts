import {MigrationInterface, QueryRunner, Table, TableUnique} from "typeorm";

export class CreateSupplier1637415641546 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'suppliers',
                columns:[
                    {
                        name:'id',
                        type:'varchar',
                        isPrimary:true
                    },
                    {
                        name:'nome_empresa',
                        type:'varchar'
                    },
                    {
                        name:'email',
                        type:'varchar'
                    },
                    {
                        name:'cnpj',
                        type:'varchar',
                    },
                    {
                        name:'status',
                        type:'int',
                    },
                    {
                        name:'descricao',
                        type:'varchar'
                    },
                    {
                        name:'foto',
                        type:'varchar',
                    },
                    {
                        name:'cep',
                        type:'varchar'
                    },
                    {
                        name:'endereco',
                        type:'varchar'
                    },
                    {
                        name:'bairro',
                        type:'varchar'
                    },
                    {
                        name:'numero_endereco',
                        type:'varchar'
                    },
                    {
                        name:'password',
                        type:'varchar'
                    },
                    {
                        name:'telefone',
                        type:'varchar'
                    },
                    {
                        name:'created_at',
                        type:'timestamp',
                        default:'now()'
                    },
                    {
                        name:'updated_at',
                        type:'timestamp',
                        default:'now()'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('suppliers');
    }

}
