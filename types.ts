// src/types.ts
export interface Item {
  name: string;
  price: number;
  image?: string;
}

export interface Service {
  name: string;
  price: number;
}

export interface Profile {
  id: string;
  name: string;
  username: string;
  category?: string;
  shopPic?: string;
  bio?: string;
  area?: string;
  ward?: string;
  county?: string;
  lat?: number;
  lng?: number;
  phone?: string;
  items?: Item[];
  services?: Service[];
}