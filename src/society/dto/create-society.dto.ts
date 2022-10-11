import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateSocietyDto {
  @IsNotEmpty()
  username: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  password: string;
  @IsNotEmpty()
  siret: number;
  image: string;
  details: string;
  open: JSON;
  phone: string;

  @IsNotEmpty()
  adressStreet: string;
  @IsNotEmpty()
  adressNum: number;
  @IsNotEmpty()
  adressCity: string;
  adressCountry: string;
  @IsNotEmpty()
  adressZip: number;
  adressCedex: number;
  adressLat: string;
  adressLong: string;

  website: string;
  status: string;
}
