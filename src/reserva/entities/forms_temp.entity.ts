import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Users } from "./users.entity";
import { Reservas } from "./reservas.entity";

@Entity({ name: 'forms_temp' })
export class Forms_temp {

    @PrimaryGeneratedColumn('uuid')
    id_forms_temp: string;

    @Column('text')
    equipamiento: string;

    @Column('text')
    area: string;

    @Column('text')
    responsable: string;

    @Column('text')
    institucion: string;

    @Column('text')
    comentarios_adicionales: string;
    
    //TOOD: completar las relaciones de campos segun la tabla
    
    @ManyToOne(
        () => Reservas,
        (reservas) => reservas.id_forms_temp
    )
    id_reservas: Reservas;

    // guardar fechas de creacion y actualizacion

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}