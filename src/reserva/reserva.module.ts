import { Module } from '@nestjs/common';
import { ReservaService } from './reserva.service';
import { ReservaController } from './reserva.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { Reservas } from './entities/reservas.entity';
import { Tipo_reserva } from './entities/tipo_reserva.entity';
import { Forms_temp } from './entities/forms_temp.entity';
import { Reserva_aprobada } from './entities/reservas_aprobadas.entity';

@Module({
  controllers: [ReservaController],
  providers: [ReservaService],
  imports: [
    TypeOrmModule.forFeature([
      Users,
      Tipo_reserva,
      Reserva_aprobada,
      Reservas,
      Forms_temp
    ]),
  ],
})
export class ReservaModule {}
