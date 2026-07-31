import { fetchAllTalismans, fetchTalismanByName } from './api';
import { Talisman, TalismanOption } from '../models/Talisman';

export const getTalismanOptions = (): Promise<TalismanOption[]> => fetchAllTalismans();

export const getTalismanDetails = (name: string): Promise<Talisman[]> => fetchTalismanByName(name);
