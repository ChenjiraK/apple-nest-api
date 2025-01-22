import { Repository, DeepPartial } from 'typeorm';
export declare class BaseService<T> {
    private readonly repository;
    constructor(repository: Repository<T>);
    create(data: DeepPartial<T>): Promise<T>;
    findAll(): Promise<T[]>;
    findOne(id: number): Promise<T | null>;
    update(id: number | string, data: DeepPartial<T>): Promise<T>;
    delete(id: number): Promise<void>;
}
