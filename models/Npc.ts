export interface Npc {
  id: string;
  name: string;
  image: string;
  description: string;
  location: string;
  quote: string;
}

export interface NpcOption {
  name: string;
  image: string;
  description?: string;
  location?: string;
  quote?: string;
  role?: string;
}
