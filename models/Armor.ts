export interface Stat {
  name: string;
  amount: number;
}

export interface Armor {
  id: string;
  name: string;
  image: string;
  description: string;
  category: string;
  weight: number;
  dmgNegation: Stat[];
  resistance: Stat[];
}

export interface ArmorOption {
  name: string;
  image: string;
}
