import { fetchAllSpirits, fetchSpiritByName } from './api';
import { Spirit, SpiritOption } from '../models/Spirit';

export const getSpiritOptions = (): Promise<SpiritOption[]> => fetchAllSpirits();

export const getSpiritDetails = (name: string): Promise<Spirit[]> => fetchSpiritByName(name);
