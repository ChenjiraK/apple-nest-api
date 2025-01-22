import { ProfileService } from './profile.service';
import { Profile } from './profile.entity';
export declare class ProfileController {
    private readonly profileService;
    constructor(profileService: ProfileService);
    create(data: Partial<Profile>): Promise<Profile>;
    findAll(): Promise<Profile[]>;
    findOne(id: number): Promise<Profile | undefined>;
    update(id: number, data: Partial<Profile>): Promise<Profile>;
    delete(id: number): Promise<void>;
}
