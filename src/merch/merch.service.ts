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

	async findOne(id: number): Promise<Merch> {
		const merch = await this.merchModel.findByPk(id);

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

	async delete(id: number): Promise<number> {
		// delete the row
		const deleted = await this.merchModel.destroy({
			where: {
				merchId: id,
			},
		});

		// check the row was deleted
		if (!deleted) {
			throw new NotFoundException();
		}

		return deleted;
	}

	async update(id: number, merchData: CreateMerchDto): Promise<Merch> {
		// update row
		const merch = await this.merchModel.update(merchData, {
			where: {
				merchId: id,
			},
		});

		// check that row was updated
		if (!merch[0]) {
			throw new NotFoundException();
		}

		return await this.merchModel.findByPk(id);
	}
}
