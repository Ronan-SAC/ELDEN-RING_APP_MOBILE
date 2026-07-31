export interface Requirement {
  name: string;
  amount: number;
}

export interface Sorcery {
  id: string;
  name: string;
  image: string;
  description: string;
  type: string;
  cost: number;
  slots: number;
  effects: string;
  requires: Requirement[];
}

export interface SorceryOption {
  name: string;
  image: string;
}
