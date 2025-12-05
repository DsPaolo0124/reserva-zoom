import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Reservas } from "./reservas.entity";
import { Reserva_aprobada } from "./reservas_aprobadas.entity";
import { Forms_temp } from "./forms_temp.entity";

@Entity({ name: 'users' })
export class Users {

    @PrimaryGeneratedColumn('uuid')
    id_user: string;

    @Column('text')
    usuario: string;
    @Column('text')
    password: string;
    @Column('text')
    estado: string;

    @OneToMany(
        () => Reservas,
        (reserva) => reserva.id_user
    )
    id_reservas?: Reservas[];

    @OneToMany(
        () => Reserva_aprobada,
        (reserva_aprobada) => reserva_aprobada.id_user
    )
    id_reserva_aprobada?: Reserva_aprobada[];

    // guardar fechas de creacion y actualizacion
    
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}
