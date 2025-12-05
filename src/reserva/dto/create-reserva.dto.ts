import { IsDate, IsDateString, IsOptional, IsString, IsUUID } from "class-validator";

export class CreateReservaDto {

    @IsString()
    titulo: string;

    @IsString()
    descripcion: string;

    @IsDateString()
    fecha: Date;

    @IsString()
    hora_inicio: string;

    @IsString()
    hora_fin: string;

    @IsString()
    @IsOptional()
    flyerXL?: string;

    @IsOptional()
    @IsString()
    flyerSM?: string;

    // DATO INSERTADO POR DEFECTO EN EL SERVICIO
    // @IsString()
    // estado: string;

    @IsUUID()
    @IsString()
    id_tipo_reserva: string;

    @IsUUID()
    @IsString()
    id_user: string;

    @IsString()
    @IsOptional()
    id_reserva_zoom_spaces?: string;

}
