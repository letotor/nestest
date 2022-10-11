import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
class ExempleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization)
      throw new HttpException('No Authorization', HttpStatus.FORBIDDEN);
    if (authorization === 'Bearer victor') next();
    else {
      throw new HttpException(
        'invalid Autorization TOken',
        HttpStatus.FORBIDDEN,
      );
    }
  }
}

export { ExempleMiddleware };
