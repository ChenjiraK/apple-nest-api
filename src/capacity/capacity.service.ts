import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CapacityEntity } from './capacity.entity';

@Injectable()
export class CapacityService extends BaseService<CapacityEntity> {
  constructor(
    @InjectRepository(CapacityEntity)
    private readonly capacityRepository: Repository<CapacityEntity>,
  ) {
    super(capacityRepository); // ส่ง Repository ให้กับ BaseService
  }
}
