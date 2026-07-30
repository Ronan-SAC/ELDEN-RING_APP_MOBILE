import { fetchAllBosses, fetchBossByName } from './api';
import { Boss } from '../models/Boss';

interface BossOption {
  name: string;
  image: string;
}

export const getBossOptions = (): Promise<BossOption[]> => fetchAllBosses();

export const getBossDetails = (name: string): Promise<Boss[]> => fetchBossByName(name);
