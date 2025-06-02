import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PublicModule } from './modules/v1/public/public.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PublicModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
