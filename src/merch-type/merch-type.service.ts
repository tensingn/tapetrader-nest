import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMerchTypeDto } from './classes/create-merch-type.dto';
import { MerchType } from './classes/merch-type.model';

@Injectable()
export class MerchTypeService {
	constructor(
		@InjectModel(MerchType) private merchTypeModel: typeof MerchType,
	) {}

	async create(createMerchTypeDto: CreateMerchTypeDto): Promise<MerchType> {
		return await this.merchTypeModel.create(createMerchTypeDto);
	}

	async findAll(): Promise<MerchType[]> {
		return await this.merchTypeModel.findAll();
	}

	async findOne(id: number): Promise<MerchType> {
		const merchType = await this.merchTypeModel.findByPk(id);

		// check that merchType was found
		if (!merchType) {
			throw new NotFoundException();
		}

		return merchType;
	}

	async update(
		id: number,
		updateMerchTypeData: CreateMerchTypeDto,
	): Promise<MerchType> {
		const updated = await this.merchTypeModel.update(updateMerchTypeData, {
			where: {
				typeId: id,
			},
		});

		// check type was found and updated
		if (!updated[0]) {
			throw new NotFoundException();
		}

		// get updated type
		return await this.merchTypeModel.findByPk(id);
	}

	async remove(id: number): Promise<number> {
		// delete row
		const deleted = await this.merchTypeModel.destroy({
			where: {
				typeId: id,
			},
		});

		// check the row was deleted
		if (!deleted) {
			throw new NotFoundException();
		}

		return deleted;
	}
}
