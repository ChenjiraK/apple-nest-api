import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelService } from './model.service';
import { ModelController } from './model.controller';
import { ModelEntity } from './model.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ModelEntity])],
  providers: [ModelService],
  controllers: [ModelController]
})
export class ModelModule {}
