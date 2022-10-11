/* eslint-disable prettier/prettier */

import {
    Body,
    Controller,
    Get,
    HttpException,
    HttpStatus,
    NotFoundException,
    Param,
    ParseIntPipe,
    Post,
    Query,
    Req,
    Res,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';

import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUserDto';
import { UsersService } from 'src/users/servcies/users/users.service';

@Controller('api/users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {
        console.log('UsersController');
    }
    @Get()
    async getUsers() {
        console.log('getUsers-->');

        return this.usersService.findAll();
    }
    @Get('email')
    async getUsersByMail(@Query('email') email: string) {
        console.log('email-->', email);
        if (email) return await this.usersService.findAll(email);
        return this.usersService.findAll();
    }

    @Get(':id')
    async getUsersById(@Param('id', ParseIntPipe) id: number) {
        const user = await this.usersService.findOne(id);
        if (!user) throw new NotFoundException('User not found with id: ${id}');
        return user;
    }

    @Get('posts')
    getUsersPosts(): any[] {
        return [
            {
                username: 'test',
                email: 'john.doe@gmail.com',
                posts: [
                    { title: 'test', content: 'test', date: '2020-01-01' },
                    { title: 'test2', content: 'test2', date: '2020-01-02' },
                ],
            },
        ];
    }

    @Post()
    createUser(@Req() req: Request, @Res() res: Response): void {
        const user = req.body;
        res.status(201).send(user);
    }

    @Post('create')
    @UsePipes(new ValidationPipe())
    createUser2(@Body() userData: CreateUserDto) {
        console.log(userData);
        this.usersService.createUsers2(userData);
        return {};
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        const user = this.usersService.fetchUserById(id);
        if (!user) throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
        return user;
    }
}
