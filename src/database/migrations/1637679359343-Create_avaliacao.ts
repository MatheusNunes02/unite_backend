import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAvaliacao1637679359343 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'avaliacao',
                columns: [
                    {
                        name:'id',
                        type:'varchar',
                        isPrimary:true
                    },
                    {
                        name:'supplier_id',
                        type:'varchar'
                    },
                    {
                        name:'merchant_id',
                        type:'varchar'
                    },
                    {
                        name:'comment',
                        type:'varchar'
                    },
                    {
                        name:'nota',
                        type:'int',
                        default:0
                    },
                    {
                        name:'type',
                        type:'int'
                    },
                    {
                        name: 'created_at',
                        type:'timestamp',
                        default:'now()'
                    },
                    {
                        name: 'updated_at',
                        type:'timestamp',
                        default:'now()'
                    }
                ],
                foreignKeys:[
                    {
                        name:'FKMerchantAvaliation',
                        referencedTableName:'merchants',
                        referencedColumnNames:['id'],
                        columnNames:["merchant_id"],
                    },
                    {
                        name:'FKSupplierAvaliation',
                        referencedTableName:'suppliers',
                        referencedColumnNames:['id'],
                        columnNames:["supplier_id"],
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('avaliacao')
    }

}


// Type se refere a caso a avaliação é para o Fornecedor, ou para o Comerciante
// Se o valor for 1 -> Avaliacão para o Fornecedor
// Se o valor for 2 -> Avaliação para o Comerciante
// Usei um número inteiro pensando na escalabilidade do programa
// Caso, por algum motivo, apareça uma nova Persona, que também tenha avaliação
// Esta poderá ser do tipo 3