import { useState, useEffect } from 'react';
import { getTalismanDetails } from '../services/talismanRepository';
import { Talisman } from '../models/Talisman';

export const useTalismanDetailsViewModel = (query: string) => {
  const [data, setData] = useState<Talisman[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await getTalismanDetails(query);
        setData(result);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        console.error('Error fetching talisman details:', error);
      } finally {
        setIsLoading(false);
      }
    };
    if (query) fetchData();
  }, [query]);

  return { data, isLoading };
};
