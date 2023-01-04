export interface GuestData {
  guest_id: number;
  first_name: string;
  last_name: string;
  attending: boolean;
  meal?: number;
  vegetarian?: boolean;
  vegan?: boolean;
  gluten_free?: boolean;
  allergies?: string;
  createdAt: string;
  updatedAt: string;
}
