import { useState, useEffect } from 'react';
import { getSpiritDetails } from '../services/spiritRepository';
import { Spirit } from '../models/Spirit';

export const useSpiritDetailsViewModel = (query: string) => {
  const [data, setData] = useState<Spirit[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await getSpiritDetails(query);
        setData(result);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        console.error('Error fetching spirit details:', error);
      } finally {
        setIsLoading(false);
      }
    };
    if (query) fetchData();
  }, [query]);

  return { data, isLoading };
};
