export interface IProfileParams {
  id?: number;
  firstname: string;
  lastname: string;
  email: string;
  password?: string | null;
  image_url?: string | null;
  birth_date?: string | Date | null;
  gender?: string | null;
  phone?: string | null;
  is_accept_terms?: boolean;
  is_accept_privacy?: boolean;
  is_accept_marketing?: boolean;
}