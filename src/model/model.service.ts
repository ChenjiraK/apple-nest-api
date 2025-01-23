import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ModelEntity } from './model.entity';

@Injectable()
export class ModelService extends BaseService<ModelEntity> {
  constructor(
    @InjectRepository(ModelEntity)
    private readonly modelRepository: Repository<ModelEntity>,
  ) {
    super(modelRepository); // ส่ง Repository ให้กับ BaseService
  }
}
