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

	@Get(':merchId')
	findOne(@Param('merchId') merchId: string): Promise<Merch> {
		return this.merchService.findOne(parseInt(merchId));
	}

	@Post()
	@UsePipes(ValidationPipe)
	create(@Body() createMerchDto: CreateMerchDto): Promise<Merch> {
		return this.merchService.create(createMerchDto);
	}

	@Delete(':merchId')
	delete(@Param('merchId') merchId: string): Promise<number> {
		return this.merchService.delete(+merchId);
	}

	@Put(':merchId')
	@UsePipes(ValidationPipe)
	update(
		@Body() updateMerchDto: CreateMerchDto,
		@Param('merchId') merchId: string,
	): Promise<[number, Merch[]]> {
		return this.merchService.update(+merchId, updateMerchDto);
	}
}
