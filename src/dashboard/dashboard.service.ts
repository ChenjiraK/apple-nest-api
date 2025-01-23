import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dashboard } from './dashboard.entity';

@Injectable()
export class DashboardService extends BaseService<Dashboard> {
  constructor(
    @InjectRepository(Dashboard)
    private readonly dashboardRepository: Repository<Dashboard>,
  ) {
    super(dashboardRepository); // ส่ง Repository ให้กับ BaseService
  }
}
