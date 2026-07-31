export interface ClassStats {
  level: string;
  vigor: string;
  mind: string;
  endurance: string;
  strength: string;
  dexterity: string;
  intelligence: string;
  faith: string;
  arcane: string;
}

export interface EldenClass {
  id: string;
  name: string;
  image: string;
  description: string;
  stats: ClassStats;
}

export interface ClassOption {
  name: string;
  image: string;
}
