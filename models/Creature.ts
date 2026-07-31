export interface Creature {
  id: string;
  name: string;
  image: string;
  description: string;
  location: string;
  drops: string[];
}

export interface CreatureOption {
  name: string;
  image: string;
  description?: string;
  location?: string;
}
