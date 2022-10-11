import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ required: false })
  @IsNotEmpty()
  name: string;
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @MinLength(10)
  @ApiProperty()
  @IsNotEmpty()
  password: string;
  @ApiProperty({ required: false })
  posts: any[];
  @ApiProperty({ required: false })
  @IsNotEmpty()
  role: Role;
}
