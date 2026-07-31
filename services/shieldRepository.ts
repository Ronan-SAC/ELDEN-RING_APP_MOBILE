import { fetchAllShields, fetchShieldByName } from './api';
import { Shield, ShieldOption } from '../models/Shield';

export const getShieldOptions = (): Promise<ShieldOption[]> => fetchAllShields();

export const getShieldDetails = (name: string): Promise<Shield[]> => fetchShieldByName(name);
