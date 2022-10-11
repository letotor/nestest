import { Controller, Get } from '@nestjs/common';

// localhost:3000/todos
@Controller('todos')
export class TodosController {
  @Get()
  findAll(): any[] {
    return;
  }
}
