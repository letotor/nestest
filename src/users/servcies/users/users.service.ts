import { CreateUserType } from 'src/utils/types';
import { PrismaService } from './../../../prisma/prisma.service';
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUserDto';
import { Role, User } from '.prisma/client';
import { hash } from 'src/helper/hash';
@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService) { };

    private fakeUsers = [
        {
            name: 'testd',
            password: 'test',
            email: 'john.doe@gmail.com',
            role: 'ADMIN',
        },
        {
            name: 'tests',
            password: 'test',
            email: 'johnd.doe@gmail.com',
        },
    ];

    async findAll(email?: string): Promise<User[]> {
        console.log('serviceuser', email);
        if (email) return await this.prisma.user.findMany({ where: { email: { contains: email } } });

        return await this.prisma.user.findMany();
    }


    async findOne(id: number): Promise<User> {
        return await this.prisma.user.findUnique({ where: { id: id } }
        );
    }


    async createUsersx(userDetails: CreateUserType): Promise<any> {
        this.fakeUsers.push(userDetails);
    }

    async createUsers2(userDetails: CreateUserDto): Promise<User> {

        if (userDetails.password) {
            userDetails.password = await hash(userDetails.password);
        }
        return await this.prisma.user.create({ data: userDetails });

    }



    async fetchUserById(id: number): Promise<User> {
        return { id, name: 'test', email: 'mlkmlkmlk', createdAt: new Date(), updatedAt: new Date() ,password: 'test', role: Role.USER };

    }

}