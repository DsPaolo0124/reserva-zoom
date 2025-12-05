import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { ReservaService } from './reserva.service';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import { CreateFrom_temDto } from './dto/create-forms_temp.dto';
import { CreateReserva_AprobadaDto } from './dto/create-reserva_aprobada.dto';

@Controller('reserva')
export class ReservaController {
  constructor(private readonly reservaService: ReservaService) {}

  @Post('addReserva')
  createReserva(@Body() createReservaDto: CreateReservaDto) {
    return this.reservaService.createReserva(createReservaDto);
  }
  @Post('addForms_temp')
  createForms_temp(@Body() createFrom_temDto: CreateFrom_temDto) {
    return this.reservaService.createForms_temp(createFrom_temDto);
  }

  @Post('addReserva_aprobada_estado')
  createReserva_aprobada(@Body() createReserva_AprobadaDto: CreateReserva_AprobadaDto) {
    return this.reservaService.createReserva_Aprobada(createReserva_AprobadaDto);
  }

  @Get('Listar_reservas')
  ListarReservas() {
    return this.reservaService.ListarReservas();
  }

  @Get('Listar_reservas_eliminadas')
  ListarReservasEliminadas() {
    return this.reservaService.ListarReservasEliminadas();
  }

  @Get(':id')
  findOne(@Param('id',ParseUUIDPipe) id: string) {
    return this.reservaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id',ParseUUIDPipe) id: string, @Body() updateReservaDto: UpdateReservaDto) {
    return this.reservaService.update(id, updateReservaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservaService.remove(+id);
  }
}
