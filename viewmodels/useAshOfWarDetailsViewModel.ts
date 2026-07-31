import { useState, useEffect } from 'react';
import { getAshOfWarDetails } from '../services/ashOfWarRepository';
import { AshOfWar } from '../models/AshOfWar';

export const useAshOfWarDetailsViewModel = (query: string) => {
  const [data, setData] = useState<AshOfWar[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await getAshOfWarDetails(query);
        setData(result);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        console.error('Error fetching ash of war details:', error);
      } finally {
        setIsLoading(false);
      }
    };
    if (query) fetchData();
  }, [query]);

  return { data, isLoading };
};
