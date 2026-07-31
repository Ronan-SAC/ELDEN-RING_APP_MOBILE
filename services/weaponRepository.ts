import { fetchAllWeapons, fetchWeaponByName } from './api';
import { Weapon, WeaponOption } from '../models/Weapon';

export const getWeaponOptions = (): Promise<WeaponOption[]> => fetchAllWeapons();

export const getWeaponDetails = (name: string): Promise<Weapon[]> => fetchWeaponByName(name);
