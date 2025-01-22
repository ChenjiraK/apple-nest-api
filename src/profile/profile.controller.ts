import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { Profile } from './profile.entity';

@Controller('profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  create(@Body() data: Partial<Profile>): Promise<Profile> {
    return this.profileService.create(data);
  }

  @Get()
  findAll(): Promise<Profile[]> {
    return this.profileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Profile | undefined> {
    return this.profileService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() data: Partial<Profile>,
  ): Promise<Profile> {
    return this.profileService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.profileService.delete(id);
  }
}
