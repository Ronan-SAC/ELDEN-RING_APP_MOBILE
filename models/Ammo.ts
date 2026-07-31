export interface AttackPower {
  name: string;
  amount: number;
}

export interface Ammo {
  id: string;
  name: string;
  image: string;
  description: string;
  type: string;
  passive: string;
  attackPower: AttackPower[];
}

export interface AmmoOption {
  name: string;
  image: string;
}
