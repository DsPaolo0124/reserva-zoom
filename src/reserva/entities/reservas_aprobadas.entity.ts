import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Users } from "./users.entity";
import { Reservas } from "./reservas.entity";

@Entity({ name: 'reserva_aprobada' })
export class Reserva_aprobada {

    @PrimaryGeneratedColumn('uuid')
    id_reserva_aprobada: string;

    //TODO: completar las relaciones de campos segun la tabla
    @ManyToOne(
            () => Users,
            (user) => user.id_reserva_aprobada
        )
    id_user: Users;

    @ManyToOne(
            () => Reservas,
            (reservas) => reservas.id_reserva_aprobada
        )
    id_reservas: Reservas;
    
    @Column('text')
    estado: string;

    @Column('text')
    mensaje: string;

    // guardar fechas de creacion y actualizacion

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}