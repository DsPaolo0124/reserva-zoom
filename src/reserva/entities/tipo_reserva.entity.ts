import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Reservas } from "./reservas.entity";

@Entity({ name: 'tipo_reserva' })
export class Tipo_reserva {

    @PrimaryGeneratedColumn('uuid')
    id_tipo_reserva: string;

    @Column('text')
    nombre: string;
    @Column('text')
    estado: string;

    @OneToMany(
            () => Reservas,
            (reserva) => reserva.id_tipo_reserva
        )
    id_reservas?: Reservas[];

    // guardar fechas de creacion y actualizacion
        
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}