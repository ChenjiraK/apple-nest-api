import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ModelEntity } from './model.entity';
import { ModelService } from './model.service';

@Controller('models')
export class ModelController {
  constructor(private readonly modelService: ModelService) {}

  @Post()
  create(@Body() data: Partial<ModelEntity>): Promise<ModelEntity> {
    return this.modelService.create(data);
  }

  @Get()
  findAll(): Promise<ModelEntity[]> {
    return this.modelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<ModelEntity | undefined> {
    return this.modelService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() data: Partial<ModelEntity>,
  ): Promise<ModelEntity> {
    return this.modelService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.modelService.delete(id);
  }
}
