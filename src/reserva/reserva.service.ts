import { Injectable } from '@nestjs/common';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reservas } from './entities/reservas.entity';
import { In, Repository } from 'typeorm';
import { CreateFrom_temDto } from './dto/create-forms_temp.dto';
import { Forms_temp } from './entities/forms_temp.entity';
import { create } from 'domain';
import { Reserva_aprobada } from './entities/reservas_aprobadas.entity';
import { CreateReserva_AprobadaDto } from './dto/create-reserva_aprobada.dto';

@Injectable()
export class ReservaService {

  constructor(
    @InjectRepository(Reservas)
    private reservaRepository: Repository<Reservas>,

    @InjectRepository(Forms_temp)
    private forms_temRepository: Repository<Forms_temp>,

    @InjectRepository(Reserva_aprobada)
    private reserva_aprobadaRepository:Repository<Reserva_aprobada>

  ) {}



  async createReserva(createReservaDto: CreateReservaDto) {
    try {
      const reserva = await this.reservaRepository.create({
        ...createReservaDto,
        estado: 'pendiente',
        id_tipo_reserva: { id_tipo_reserva: createReservaDto.id_tipo_reserva },
        id_user: { id_user: createReservaDto.id_user },
      });
      await this.reservaRepository.save(reserva);
      return {
      message: `Reserva creada correctamente`,
      reserva
      };
    } catch (error) {
      throw new Error('Error al crear la reserva: ' + error.message);
    }
  }

  async createForms_temp(createFrom_temDto:CreateFrom_temDto){
    try {
      const form_temp = await this.forms_temRepository.create({
      ...createFrom_temDto,
      id_reservas: {id_reservas: createFrom_temDto.id_reservas}
    });
    await this.forms_temRepository.save(form_temp);
    return {
      message: `Detalle de Reserva creado correctamente`,
      form_temp
    };
    } catch (error) {
      throw new Error('Error al crear el detalle de reserva: ' + error.message);
    }
  }

  async createReserva_Aprobada(createReserva_AprobadaDto:CreateReserva_AprobadaDto){
    try {
      
      


      const reserva_aprobada = await this.reserva_aprobadaRepository.create({
        ...createReserva_AprobadaDto,
        // estado: 'APROBADA',
        id_user: {id_user: createReserva_AprobadaDto.id_user},
        id_reservas: {id_reservas: createReserva_AprobadaDto.id_reservas}
      });
      await this.reserva_aprobadaRepository.save(reserva_aprobada);

      // realizar el fill one primero
      // const {id_reservas}= createReserva_AprobadaDto;

      // await this.update(id_reservas,...Update);

    return {
      message: `Reserva ${createReserva_AprobadaDto.estado} correctamente`,
      reserva_aprobada
    };
    } catch (error) {
      throw new Error(`Error al ${createReserva_AprobadaDto.estado} reserva: ` + error.message);
    }
  }

  ListarReservas() {
    return this.reservaRepository.find({
      where: { 
        // estado: 'activo'
        estado: In(['aprobado', 'pendiente']),
      },

      relations: {
        id_tipo_reserva: true,
        id_user: true
      }
    });
  }

  ListarReservasEliminadas(){
    return this.reservaRepository.find({
      where: { 
        // estado: 'activo'
        estado: 'rechazado'
      },

      relations: {
        id_tipo_reserva: true,
        id_user: true
      }
    });
  }

  findOne(id: string) {
    return `This action returns a #${id} reserva`;
  }

  async update(id: string, updateReservaDto: UpdateReservaDto) {

    const reserva = await this.reservaRepository.preload({
      id_reservas: id,
      ...updateReservaDto,
      id_tipo_reserva: {id_tipo_reserva: updateReservaDto.id_tipo_reserva},
      id_user: {id_user: updateReservaDto.id_user}
    });

    if (!reserva) {
      throw new Error(`Reserva con ID ${id} no encontrada`);
    }

    await this.reservaRepository.save(reserva);

    return reserva;
  }

  remove(id: number) {
    return `This action removes a #${id} reserva`;
  }
}
