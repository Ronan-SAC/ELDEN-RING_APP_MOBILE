import { useState, useEffect } from 'react';
import { getSorceryDetails } from '../services/sorceryRepository';
import { Sorcery } from '../models/Sorcery';

export const useSorceryDetailsViewModel = (query: string) => {
  const [data, setData] = useState<Sorcery[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await getSorceryDetails(query);
        setData(result);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        console.error('Error fetching sorcery details:', error);
      } finally {
        setIsLoading(false);
      }
    };
    if (query) fetchData();
  }, [query]);

  return { data, isLoading };
};
