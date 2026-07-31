import { fetchAllIncantations, fetchIncantationByName } from './api';
import { Incantation, IncantationOption } from '../models/Incantation';

export const getIncantationOptions = (): Promise<IncantationOption[]> => fetchAllIncantations();

export const getIncantationDetails = (name: string): Promise<Incantation[]> => fetchIncantationByName(name);
