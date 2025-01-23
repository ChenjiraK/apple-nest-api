import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ColorService } from './color.service';
import { ColorEntity } from './color.entity';

@Controller('colors')
export class ColorController {
  constructor(private readonly colorService: ColorService) {}

  @Post()
  create(@Body() data: Partial<ColorEntity>): Promise<ColorEntity> {
    return this.colorService.create(data);
  }

  @Get()
  findAll(): Promise<ColorEntity[]> {
    return this.colorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<ColorEntity | undefined> {
    return this.colorService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() data: Partial<ColorEntity>,
  ): Promise<ColorEntity> {
    return this.colorService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.colorService.delete(id);
  }
}
