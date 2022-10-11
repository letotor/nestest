import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1>🚀  SERVER IS RUNNING </h1> ';
  }
}
  