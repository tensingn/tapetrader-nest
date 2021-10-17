import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
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

    // @Get(':merchId')
    // findOne(@Param('merchId') merchId: string): Merch {
    //     return this.merchService.findOne(parseInt(merchId));
    // }

    @Post()
    create(@Body() createMerchDto: CreateMerchDto): string {
        return `Desc: ${createMerchDto.description}`;
    }

    @Delete(':merchId')
    delete(@Param('merchId') merchId: string): string {
        return `${merchId}`;
    }

    @Put(':merchId')
    update(@Body() updateMerchDto: CreateMerchDto, @Param('merchId') merchId: string): string {
        return `${merchId}`;
    }
}
