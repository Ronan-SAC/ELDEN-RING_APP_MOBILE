import { useState, useEffect } from 'react';
import { getNpcOptions } from '../services/npcRepository';
import { NpcOption } from '../models/Npc';

export const useNpcListViewModel = () => {
  const [npcOptions, setNpcOptions] = useState<NpcOption[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);
        const data = await getNpcOptions();
        setNpcOptions(data);
      } catch (error) {
        console.error('Error fetching NPC list:', error);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, []);

  return { npcOptions, isLoading };
};
