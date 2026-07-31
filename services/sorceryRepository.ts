import { fetchAllSorceries, fetchSorceryByName } from './api';
import { Sorcery, SorceryOption } from '../models/Sorcery';

export const getSorceryOptions = (): Promise<SorceryOption[]> => fetchAllSorceries();

export const getSorceryDetails = (name: string): Promise<Sorcery[]> => fetchSorceryByName(name);
