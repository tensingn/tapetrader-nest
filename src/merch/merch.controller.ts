import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateMerchDto } from './dto/create-merch.dto';

@Controller('merch')
export class MerchController {
    @Get()
    findAll(): string {
        return 'all merch';
    }

    @Get(':merchId')
    findOne(@Param('merchId') merchId): string {
        return `${merchId}`;
    }

    @Post()
    create(@Body() createMerchDto: CreateMerchDto): string {
        return `Desc: ${createMerchDto.description}`;
    }

    @Delete(':merchId')
    delete(@Param('merchId') merchId): string {
        return `${merchId}`;
    }

    @Put(':merchId')
    update(@Param('merchId') merchId): string {
        return `${merchId}`;
    }
}
