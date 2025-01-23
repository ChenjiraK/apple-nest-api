import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { Dashboard } from './dashboard.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dashboard])],
  providers: [DashboardService],
  controllers: [DashboardController]
})
export class DashboardModule {}
