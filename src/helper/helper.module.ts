import { Module } from '@nestjs/common';
import { NestjsHasherModule } from 'nestjs-hasher';

@Module({
  imports: [
    NestjsHasherModule.register({
      provider: 'argon',
    }),
  ],
})
export class HelperModule {}
