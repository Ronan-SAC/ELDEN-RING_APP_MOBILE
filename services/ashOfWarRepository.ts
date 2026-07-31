import { fetchAllAshesOfWar, fetchAshOfWarByName } from './api';
import { AshOfWar, AshOfWarOption } from '../models/AshOfWar';

export const getAshOfWarOptions = (): Promise<AshOfWarOption[]> => fetchAllAshesOfWar();

export const getAshOfWarDetails = (name: string): Promise<AshOfWar[]> => fetchAshOfWarByName(name);
