import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/sequelize';
import { Merch } from './merch.model';

@Injectable()
export class MerchService {
    constructor(@InjectModel(Merch)
    private merchModel: typeof Merch
) {}

    async findAll(): Promise<Merch[]> {
        return this.merchModel.findAll();
    }

    async findOne(merchId: number): Promise<Merch> {
        return this.merchModel.findOne({
            where: {
                merchId: merchId
            }
        });
    }
}
