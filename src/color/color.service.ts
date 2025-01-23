import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ColorEntity } from './color.entity';

@Injectable()
export class ColorService extends BaseService<ColorEntity> {
  constructor(
    @InjectRepository(ColorEntity)
    private readonly colorRepository: Repository<ColorEntity>,
  ) {
    super(colorRepository); // ส่ง Repository ให้กับ BaseService
  }
}
