import {
	Controller,
	Get,
	Post,
	Body,
	Put,
	Param,
	Delete,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './classes/create-user.dto';
import { User } from './classes/user.model';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post()
	@UsePipes(ValidationPipe)
	create(@Body() createUserDto: CreateUserDto): Promise<User> {
		return this.userService.create(createUserDto);
	}

	@Get()
	findAll(): Promise<User[]> {
		return this.userService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string): Promise<User> {
		return this.userService.findOne(+id);
	}

	@Put(':id')
	@UsePipes(ValidationPipe)
	update(
		@Param('id') id: string,
		@Body() updateUserData: CreateUserDto,
	): Promise<User> {
		return this.userService.update(+id, updateUserData);
	}

	@Delete(':id')
	remove(@Param('id') id: string): Promise<number> {
		return this.userService.remove(+id);
	}
}
