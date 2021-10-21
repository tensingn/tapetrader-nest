import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { NotFoundError } from 'rxjs';
import { CreateUserDto } from './classes/create-user.dto';
import { User } from './classes/user.model';

@Injectable()
export class UserService {
	constructor(@InjectModel(User) private userModel: typeof User) {}

	async create(createUserDto: CreateUserDto): Promise<User> {
		return await this.userModel.create(createUserDto);
	}

	async findAll(): Promise<User[]> {
		return await this.userModel.findAll();
	}

	async findOne(id: number): Promise<User> {
		const user = await this.userModel.findByPk(id);

		// check that user was found
		if (!user) {
			throw new NotFoundException();
		}

		return user;
	}

	async update(id: number, updateUserData: CreateUserDto): Promise<User> {
		const updated = await this.userModel.update(updateUserData, {
			where: {
				userId: id,
			},
		});

		// check that user was found and updated
		if (!updated[0]) {
			throw new NotFoundException();
		}

		// return updated user
		return await this.userModel.findByPk(id);
	}

	async remove(id: number): Promise<number> {
		// delete row
		const deleted = await this.userModel.destroy({
			where: {
				userId: id,
			},
		});

		// check the row was deleted
		if (!deleted) {
			throw new NotFoundException();
		}

		return deleted;
	}
}
