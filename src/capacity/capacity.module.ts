import { Module } from '@nestjs/common';
import { CapacityService } from './capacity.service';
import { CapacityController } from './capacity.controller';
import { CapacityEntity } from './capacity.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CapacityEntity])],
  providers: [CapacityService],
  controllers: [CapacityController]
})
export class CapacityModule {}
