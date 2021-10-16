import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MerchController } from './merch/merch.controller';

@Module({
  imports: [],
  controllers: [AppController, MerchController],
  providers: [AppService],
})
export class AppModule {}
