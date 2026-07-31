import { useState, useEffect } from 'react';
import { getIncantationDetails } from '../services/incantationRepository';
import { Incantation } from '../models/Incantation';

export const useIncantationDetailsViewModel = (query: string) => {
  const [data, setData] = useState<Incantation[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await getIncantationDetails(query);
        setData(result);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        console.error('Error fetching incantation details:', error);
      } finally {
        setIsLoading(false);
      }
    };
    if (query) fetchData();
  }, [query]);

  return { data, isLoading };
};
