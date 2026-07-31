import { fetchAllBosses, fetchBossByName } from './api';
import { Boss, BossOption } from '../models/Boss';

export const getBossOptions = (): Promise<BossOption[]> => fetchAllBosses();

export const getBossDetails = (name: string): Promise<Boss[]> => fetchBossByName(name);
