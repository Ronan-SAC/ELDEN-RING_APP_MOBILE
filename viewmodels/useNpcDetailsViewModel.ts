import { useState, useEffect } from 'react';
import { getNpcDetails } from '../services/npcRepository';
import { Npc } from '../models/Npc';

export const useNpcDetailsViewModel = (query: string) => {
  const [data, setData] = useState<Npc[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await getNpcDetails(query);
        setData(result);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        console.error('Error fetching NPC details:', error);
      } finally {
        setIsLoading(false);
      }
    };
    if (query) fetchData();
  }, [query]);

  return { data, isLoading };
};
