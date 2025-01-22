import { Repository, DeepPartial } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BaseService<T> {
  constructor(private readonly repository: Repository<T>) {}

  async create(data: DeepPartial<T>): Promise<T> {
    const entity = this.repository.create(data);
    return this.repository.save(entity);
  }

  async findAll(): Promise<T[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<T | null> {
    return this.repository.findOne({
      where: { id } as any,
    });
  }

  async update(id: number | string, data: DeepPartial<T>): Promise<T> {
    await this.repository.update(id, data as any);
    return this.findOne(id as any);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
