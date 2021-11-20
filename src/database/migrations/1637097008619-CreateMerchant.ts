import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class CreateMerchant1637097008619 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"merchants",
                columns:[
                    {
                        name:'id',
                        type:'varchar',
                        isPrimary:true,
                    },
                    {
                        name:'name',
                        type:'varchar',
                    },

                    {
                        name:'cpf',
                        type:'varchar',
                    },

                    {
                        name:'email',
                        type:'varchar',
                    },
                    {
                        name:'password',
                        type:'varchar',
                    },
                    {
                        name:'foto',
                        type:'varchar',
                        isNullable:true
                    },

                    {
                        name:'cep',
                        type:'varchar',
                    },

                    {
                        name:'bairro',
                        type:'varchar'
                    },
                    {
                        name:'endereco',
                        type:'varchar'
                    },
                    {
                        name:'sobre_mim',
                        type:'varchar',
                        isNullable:true,
                    },
                    {
                        name:'telefone',
                        type:'varchar'
                    },
                    {
                        name:'status',
                        type:'int',
                        default:200
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
        await queryRunner.dropTable('merchants')
    }

}
