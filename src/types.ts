export type GuestData = {
  guest_id: number;
  first_name: string;
  last_name: string;
  attending: boolean;
  createdAt: string;
  updatedAt: string;
};

export type CloudflareImageRequestResponse = {
  result?: {
    variants?: string[];
  };
  [key: string]: unknown;
};
