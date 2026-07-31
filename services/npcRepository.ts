import { fetchAllNpcs, fetchNpcByName } from './api';
import { Npc, NpcOption } from '../models/Npc';

export const getNpcOptions = (): Promise<NpcOption[]> => fetchAllNpcs();

export const getNpcDetails = (name: string): Promise<Npc[]> => fetchNpcByName(name);
