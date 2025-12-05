import { IsString, IsUUID } from "class-validator";

export class CreateReserva_AprobadaDto {
    
    @IsUUID()
    @IsString()
    id_user: string;

    @IsUUID()
    @IsString()
    id_reservas: string;

    @IsString()
    estado: string;
    
    @IsString()
    mensaje: string;
}