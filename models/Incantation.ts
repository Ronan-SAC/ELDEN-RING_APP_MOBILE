export interface Requirement {
  name: string;
  amount: number;
}

export interface Incantation {
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

export interface IncantationOption {
  name: string;
  image: string;
}
