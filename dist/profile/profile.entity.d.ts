export declare class Profile {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password?: string;
    image_url?: string;
    birth_date?: Date;
    gender?: string;
    phone?: string;
    is_accept_terms: boolean;
    is_accept_privacy: boolean;
    is_accept_marketing: boolean;
    created_at: Date;
    updated_at: Date;
}
