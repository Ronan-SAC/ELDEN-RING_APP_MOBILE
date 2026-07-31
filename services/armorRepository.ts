import { fetchAllArmors, fetchArmorByName } from './api';
import { Armor, ArmorOption } from '../models/Armor';

export const getArmorOptions = (): Promise<ArmorOption[]> => fetchAllArmors();

export const getArmorDetails = (name: string): Promise<Armor[]> => fetchArmorByName(name);
