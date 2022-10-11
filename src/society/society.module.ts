import { Module } from '@nestjs/common';
import { SocietyService } from './society.service';
import { SocietyController } from './society.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SocietyController],
  providers: [SocietyService],
  imports: [PrismaModule],
})
export class SocietyModule {}
