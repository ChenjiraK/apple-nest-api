import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CapacityEntity } from './capacity.entity';
import { CapacityService } from './capacity.service';

@Controller('capacity')
export class CapacityController {
  constructor(private readonly capacityService: CapacityService) {}

  @Post()
  create(@Body() data: Partial<CapacityEntity>): Promise<CapacityEntity> {
    return this.capacityService.create(data);
  }

  @Get()
  findAll(): Promise<CapacityEntity[]> {
    return this.capacityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<CapacityEntity | undefined> {
    return this.capacityService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() data: Partial<CapacityEntity>,
  ): Promise<CapacityEntity> {
    return this.capacityService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.capacityService.delete(id);
  }
}
