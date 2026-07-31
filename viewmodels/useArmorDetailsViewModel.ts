import { useState, useEffect } from 'react';
import { getArmorDetails } from '../services/armorRepository';
import { Armor } from '../models/Armor';

export const useArmorDetailsViewModel = (query: string) => {
  const [data, setData] = useState<Armor[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await getArmorDetails(query);
        setData(result);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        console.error('Error fetching armor details:', error);
      } finally {
        setIsLoading(false);
      }
    };
    if (query) fetchData();
  }, [query]);

  return { data, isLoading };
};
