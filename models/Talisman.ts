export interface Talisman {
  id: string;
  name: string;
  image: string;
  description: string;
  effects: string;
}

export interface TalismanOption {
  name: string;
  image: string;
  description?: string;
  effects?: string;
}
