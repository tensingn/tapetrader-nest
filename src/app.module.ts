import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MerchModule } from './merch/merch.module';
import { Merch } from './merch/classes/merch.model';

import { UserModule } from './user/user.module';
import { User } from './user/classes/user.model';

import { MerchTypeModule } from './merch-type/merch-type.module';
import { MerchType } from './merch-type/classes/merch-type.model';

@Module({
	imports: [
		ConfigModule.forRoot(),
		SequelizeModule.forRoot({
			dialect: 'mysql',
			host: process.env.DB_HOST,
			port: 3306,
			username: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_DB,
			models: [User, Merch, MerchType],
		}),
		MerchModule,
		UserModule,
		MerchTypeModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
