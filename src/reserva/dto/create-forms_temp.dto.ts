import { IsString, IsUUID } from "class-validator";

export class CreateFrom_temDto {

    @IsString()
    equipamiento: string;

    @IsString()
    area: string;
    
    @IsString()
    responsable: string;
    
    @IsString()
    institucion: string;
    
    @IsString()
    comentarios_adicionales: string;
        
    @IsUUID()
    @IsString()
    id_reservas: string;

}