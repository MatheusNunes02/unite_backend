import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Categories1637420665961 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'categories',
                columns: [
                    {
                        name:'id',
                        type:'varchar'
                    },
                    {
                        name:'category_name',
                        type:'varchar'
                    },
                    {
                        name:'created_at',
                        type:'timestamp',
                        default:"now()"
                    },
                    {
                        name:'updated_at',
                        type:'timestamp',
                        default:"now()"
                    },
                ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
