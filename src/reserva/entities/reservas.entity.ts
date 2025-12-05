import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Users } from "./users.entity";
import { Tipo_reserva } from "./tipo_reserva.entity";
import { Reserva_aprobada } from "./reservas_aprobadas.entity";
import { Forms_temp } from "./forms_temp.entity";

@Entity({ name: 'reservas' })
export class Reservas {

    @PrimaryGeneratedColumn('uuid')
    id_reservas: string;

    @Column('text')
    titulo: string;

    @Column('text')
    descripcion: string;

    @Column('date')
    fecha: Date;

    @Column('time')
    hora_inicio: string;

    @Column('time')
    hora_fin: string;

    @Column('text')
    flyerXL?: string;

    @Column('text')
    flyerSM?: string;

    @Column('text')
    estado: string;

    //TOOD: completar las relaciones de campos segun la tabla

    @ManyToOne(
        () => Tipo_reserva,
        (tipo_reserva) => tipo_reserva.id_reservas
    )
    id_tipo_reserva: Tipo_reserva;

    @ManyToOne(
        () => Users,
        (user) => user.id_reservas
    )
    id_user: Users;

    @Column('text')
    id_reserva_zoom_spaces?: string;

    @OneToMany(
            () => Reserva_aprobada,
            (reserva_aprobada) => reserva_aprobada.id_reservas
        )
    id_reserva_aprobada?: Reserva_aprobada[];

    @OneToMany(
            () => Forms_temp,
            (forms_temp) => forms_temp.id_reservas
    )
    id_forms_temp?: Forms_temp[];

    // guardar fechas de creacion y actualizacion

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}