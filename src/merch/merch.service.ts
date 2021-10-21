import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectModel } from '@nestjs/sequelize';
import { Merch } from './classes/merch.model';
import { CreateMerchDto } from './classes/create-merch.dto';

@Injectable()
export class MerchService {
	constructor(@InjectModel(Merch) private merchModel: typeof Merch) {}

	async findAll(): Promise<Merch[]> {
		return await this.merchModel.findAll();
	}

	async findOne(merchId: number): Promise<Merch> {
		const merch = await this.merchModel.findByPk(merchId);

		// check that merch was found
		if (!merch) {
			throw new NotFoundException();
		}

		return merch;
	}

	async create(merchData: CreateMerchDto): Promise<Merch> {
		const merch = await this.merchModel.create(merchData);
		return merch;
	}

	async delete(merchId: number): Promise<number> {
		// delete the row
		const deleted = await this.merchModel.destroy({
			where: {
				merchId: merchId,
			},
		});

		// check the row was deleted
		if (!deleted) {
			throw new NotFoundException();
		}

		return deleted;
	}

	async update(merchId: number, merchData: CreateMerchDto) {
		// update row
		const merch = await this.merchModel.update(merchData, {
			where: {
				merchId: merchId,
			},
		});

		// check that row was updated
		if (!merch[0]) {
			throw new NotFoundException();
		}

		return merch;
	}
}
