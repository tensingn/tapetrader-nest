import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { MerchTypeService } from './merch-type.service';
import { MerchTypeController } from './merch-type.controller';
import { MerchType } from './classes/merch-type.model';

@Module({
	imports: [SequelizeModule.forFeature([MerchType])],
	controllers: [MerchTypeController],
	providers: [MerchTypeService],
})
export class MerchTypeModule {}
