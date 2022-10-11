import { NextFunction, Request, Response } from 'express';
import {
  Injectable,
  NestMiddleware,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Injectable()
export class AnotherMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization)
      throw new HttpException('No Authorization', HttpStatus.FORBIDDEN);
    console.log('AnotherMiddleware');
    if (authorization === 'Bearer victor') next();
    else {
      throw new HttpException(
        'invalid Autorization TOken',
        HttpStatus.FORBIDDEN,
      );
    }
  }
}
