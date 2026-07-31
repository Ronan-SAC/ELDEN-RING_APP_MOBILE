export interface Boss {
  id: string;
  name: string;
  image: string;
  description: string;
  region: string;
  location: string;
  healthPoints: string;
  drops: string[];
}

export interface BossOption {
  name: string;
  image: string;
  description?: string;
  region?: string;
  location?: string;
}