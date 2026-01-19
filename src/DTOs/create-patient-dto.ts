import { IsString, IsNotEmpty, IsOptional, IsInt, Min, Max, Length } from 'class-validator';


export class CreatePatientDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 200)
  name: string;

  @IsString()
  @Length(10, 10)
  phone: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(150)
  age?: number;
}