import { useState, useEffect } from 'react';
import { getCreatureDetails } from '../services/creatureRepository';
import { Creature } from '../models/Creature';

export const useCreatureDetailsViewModel = (query: string) => {
  const [data, setData] = useState<Creature[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await getCreatureDetails(query);
        setData(result);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        console.error('Error fetching creature details:', error);
      } finally {
        setIsLoading(false);
      }
    };
    if (query) fetchData();
  }, [query]);

  return { data, isLoading };
};
