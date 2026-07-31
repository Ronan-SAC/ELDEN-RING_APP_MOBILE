import { fetchAllAmmos, fetchAmmoByName } from './api';
import { Ammo, AmmoOption } from '../models/Ammo';

export const getAmmoOptions = (): Promise<AmmoOption[]> => fetchAllAmmos();

export const getAmmoDetails = (name: string): Promise<Ammo[]> => fetchAmmoByName(name);
