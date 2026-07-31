import { useState, useEffect } from 'react';
import { getCreatureOptions } from '../services/creatureRepository';
import { CreatureOption } from '../models/Creature';

export const useCreatureListViewModel = () => {
  const [creatureOptions, setCreatureOptions] = useState<CreatureOption[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);
        const data = await getCreatureOptions();
        setCreatureOptions(data);
      } catch (error) {
        console.error('Error fetching creature list:', error);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, []);

  return { creatureOptions, isLoading };
};
