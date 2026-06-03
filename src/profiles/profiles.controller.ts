import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Put,
  HttpCode,
  Delete,
  HttpStatus,
  NotFoundException,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CreateProfileDto } from './dto/createProfile.dto';
import { ProfilesService } from './profiles.service';
import { UpdateProfileDto } from './dto/updateProfile.dto';
import type { UUID } from 'crypto';

@Controller('profiles')
export class ProfilesController {
  constructor(private profilesService: ProfilesService) {}

  @Get()
  findAll(@Query('location') location: string) {
    return this.profilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: UUID) {
    const profile = this.profilesService.findOne(id);
    if (!profile) {
      throw new NotFoundException('Profile not found');
    }
    return profile;
  }

  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    const profile = this.profilesService.create(createProfileDto);

    return profile;
  }

  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: UUID,
    @Body() updateProfileDto: UpdateProfileDto,
  ) {
    const profile = this.profilesService.update(id, updateProfileDto);

    if (!profile) {
      throw new NotFoundException('Profile not found');
    }

    return profile;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseUUIDPipe) id: UUID) {
    const deleted = this.profilesService.delete(id);

    if (!deleted) {
      throw new NotFoundException('Profile not found');
    }

    return { message: 'Profile deleted successfully' };
  }
}
