import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/sequelize';
import { Merch } from './merch.model';
import { CreateMerchDto } from './dto/create-merch.dto'

@Injectable()
export class MerchService {
    constructor(@InjectModel(Merch)
    private merchModel: typeof Merch
) {}

    async findAll(): Promise<Merch[]> {
        return this.merchModel.findAll();
    }

    async findOne(merchId: number): Promise<Merch> {
        return this.merchModel.findByPk(merchId);
    }

    async create(merch: CreateMerchDto): Promise<Merch> {
        console.log(merch)
        return this.merchModel.create(merch);
    }

    async delete(merchId: number): Promise<number> {
        return this.merchModel.destroy({
            where: {
                merchId: merchId
            }
        });
    }
}
