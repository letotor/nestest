import { IsEmail, MinLength } from 'class-validator';

export class UserDto {
  name: string;
  @IsEmail()
  email: string;
  @MinLength(10)
  password: string;
  role: string;
}
