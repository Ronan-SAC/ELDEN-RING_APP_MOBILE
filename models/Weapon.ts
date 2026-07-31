export interface Stat {
  name: string;
  amount: number;
}

export interface Scaling {
  name: string;
  scaling: string;
}

export interface Weapon {
  id: string;
  name: string;
  image: string;
  description: string;
  category: string;
  weight: number;
  attack: Stat[];
  defence: Stat[];
  requiredAttributes: Stat[];
  scalesWith: Scaling[];
}

export interface WeaponOption {
  name: string;
  image: string;
  description?: string;
  category?: string;
  weight?: number;
}
