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
    }

}
