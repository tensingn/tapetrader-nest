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
import { MerchTypeService } from './merch-type.service';
import { CreateMerchTypeDto } from './classes/create-merch-type.dto';
import { MerchType } from './classes/merch-type.model';

@Controller('merch-type')
export class MerchTypeController {
	constructor(private readonly merchTypeService: MerchTypeService) {}

	@Post()
	@UsePipes(ValidationPipe)
	create(@Body() createMerchTypeDto: CreateMerchTypeDto): Promise<MerchType> {
		return this.merchTypeService.create(createMerchTypeDto);
	}

	@Get()
	findAll(): Promise<MerchType[]> {
		return this.merchTypeService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string): Promise<MerchType> {
		return this.merchTypeService.findOne(+id);
	}

	@Put(':id')
	@UsePipes(ValidationPipe)
	update(
		@Param('id') id: string,
		@Body() updateMerchTypeData: CreateMerchTypeDto,
	): Promise<MerchType> {
		return this.merchTypeService.update(+id, updateMerchTypeData);
	}

	@Delete(':id')
	remove(@Param('id') id: string): Promise<number> {
		return this.merchTypeService.remove(+id);
	}
}
