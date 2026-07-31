export interface Location {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface LocationOption {
  name: string;
  image: string;
  description?: string;
  region?: string;
}
