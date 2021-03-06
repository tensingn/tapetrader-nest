import {
	Controller,
	Get,
	Post,
	Put,
	Delete,
	Body,
	Param,
	UsePipes,
	ValidationPipe,
	NotFoundException,
} from '@nestjs/common';
import { CreateMerchDto } from './classes/create-merch.dto';
import { MerchService } from './merch.service';
import { Merch } from './classes/merch.model';

@Controller('merch')
export class MerchController {
	constructor(private readonly merchService: MerchService) {}

	@Get()
	findAll(): Promise<Merch[]> {
		return this.merchService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string): Promise<Merch> {
		return this.merchService.findOne(+id);
	}

	@Post()
	@UsePipes(ValidationPipe)
	create(@Body() createMerchDto: CreateMerchDto): Promise<Merch> {
		return this.merchService.create(createMerchDto);
	}

	@Delete(':id')
	delete(@Param('id') id: string): Promise<number> {
		return this.merchService.delete(+id);
	}

	@Put(':id')
	@UsePipes(ValidationPipe)
	update(
		@Body() updateMerchDto: CreateMerchDto,
		@Param('id') id: string,
	): Promise<Merch> {
		return this.merchService.update(+id, updateMerchDto);
	}
}
