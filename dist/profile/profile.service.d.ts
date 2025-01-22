import { BaseService } from '../base/base.service';
import { Repository } from 'typeorm';
import { Profile } from './profile.entity';
export declare class ProfileService extends BaseService<Profile> {
    private readonly profileRepository;
    constructor(profileRepository: Repository<Profile>);
}
