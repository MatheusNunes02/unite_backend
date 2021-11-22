import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CategorySuppliers1637426952498 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'category_suppliers',
                columns: [
                    {
                        name:'id',
                        type:'varchar'
                    },
                    {
                        name:'category_id',
                        type:'varchar'
                    },
                    {
                        name:'supplier_id',
                        type:'varchar'
                    },
                    {
                        name:'status',
                        type:'boolean',
                        default:true
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()",
                    },
                    {
                        name:"updated_at",
                        type:"timestamp",
                        default:"now()",
                    },
                ],
                foreignKeys:[
                    {
                        name:'FKCategory',
                        referencedTableName:'categories',
                        referencedColumnNames:['id'],
                        columnNames:["category_id"],
                    },
                    {
                        name:'FKSupplier',
                        referencedTableName:'suppliers',
                        referencedColumnNames:['id'],
                        columnNames:["supplier_id"],
                    }
                ]
                
            })

        )
        // const foreignKeys = [
        //     new TableForeignKey(
        //         {

        //             referencedTableName:'categories',
        //             referencedColumnNames:['id'],
        //             columnNames:["category_id"],
        //         }
        //     ),
        //     new TableForeignKey(
        //         {
        //             referencedTableName:'suppliers',
        //             referencedColumnNames:['id'],
        //             columnNames:["supplier_id"],
        //         }
        //     )
        // ]

        // await queryRunner.createForeignKeys("category_suppliers",
        // foreignKeys
        // )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('category_suppliers')
    }

}
