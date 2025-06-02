import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCityRequestDto {
  @IsString()
  @IsNotEmpty()
  full_name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  city_name: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsString()
  @IsOptional()
  cnpj?: string;
}
