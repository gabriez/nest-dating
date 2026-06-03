import { Controller, Get, Post, Body, Param, Query, Put } from '@nestjs/common';
import { CreateProfileDto } from './dto/createProfile.dto'

@Controller('profiles')
export class ProfilesController {
    @Get()
    findAll(@Query('location') location: string) {
        return { location };
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return { id }
    }

    @Post()
    create(@Body() createProfileDto: CreateProfileDto) {
        return {
            name: createProfileDto.name,
            description: createProfileDto.description
        }
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateProfileDto: CreateProfileDto) {

        return {
            id,
            name: updateProfileDto.name,
            description: updateProfileDto.description
        }
     }

}
