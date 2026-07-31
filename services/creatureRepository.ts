import { fetchAllCreatures, fetchCreatureByName } from './api';
import { Creature, CreatureOption } from '../models/Creature';

export const getCreatureOptions = (): Promise<CreatureOption[]> => fetchAllCreatures();

export const getCreatureDetails = (name: string): Promise<Creature[]> => fetchCreatureByName(name);
