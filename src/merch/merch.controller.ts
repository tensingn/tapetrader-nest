import { Controller, Get, Post, Put, Delete, Body, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateMerchDto } from './dto/create-merch.dto';
import { MerchService } from './merch.service';
import { Merch } from './merch.model';

@Controller('merch')
export class MerchController {
    constructor(private readonly merchService: MerchService) {}

    @Get()
    async findAll(): Promise<Merch[]> {
        return this.merchService.findAll();
    }

    @Get(':merchId')
    findOne(@Param('merchId') merchId: string): Promise<Merch> {
        return this.merchService.findOne(parseInt(merchId));;
    }

    @Post()
    @UsePipes(ValidationPipe)
    create(@Body() createMerchDto: CreateMerchDto): Promise<Merch> {
        return this.merchService.create(createMerchDto);
    }

    @Delete(':merchId')
    delete(@Param('merchId') merchId: string): Promise<number> {
        return this.merchService.delete(parseInt(merchId));
    }

    @Put(':merchId')
    update(@Body() updateMerchDto: CreateMerchDto, @Param('merchId') merchId: string): string {
        return `${merchId}`;
    }
}
