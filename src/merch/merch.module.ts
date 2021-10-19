import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { MerchController } from './merch.controller';
import { MerchService } from './merch.service';
import { Merch } from './classes/merch.model';

@Module({
	imports: [SequelizeModule.forFeature([Merch])],
	controllers: [MerchController],
	providers: [MerchService],
})
export class MerchModule {}
