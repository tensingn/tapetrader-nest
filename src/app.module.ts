import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MerchModule } from './merch/merch.module'
import { SequelizeModule } from '@nestjs/sequelize';
import { Merch } from './merch/merch.model';


@Module({
  imports: [ ConfigModule.forRoot(), MerchModule,
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DB,
      models: [ Merch ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
