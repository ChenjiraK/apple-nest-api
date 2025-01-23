import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { Dashboard } from './dashboard.entity';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Post()
  create(@Body() data: Partial<Dashboard>): Promise<Dashboard> {
    return this.dashboardService.create(data);
  }

  @Get()
  findAll(): Promise<Dashboard[]> {
    return this.dashboardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Dashboard | undefined> {
    return this.dashboardService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() data: Partial<Dashboard>,
  ): Promise<Dashboard> {
    return this.dashboardService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.dashboardService.delete(id);
  }
}
