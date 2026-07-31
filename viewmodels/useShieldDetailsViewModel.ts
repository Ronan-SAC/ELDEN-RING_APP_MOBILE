import { useState, useEffect } from 'react';
import { getShieldDetails } from '../services/shieldRepository';
import { Shield } from '../models/Shield';

export const useShieldDetailsViewModel = (query: string) => {
  const [data, setData] = useState<Shield[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await getShieldDetails(query);
        setData(result);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        console.error('Error fetching shield details:', error);
      } finally {
        setIsLoading(false);
      }
    };
    if (query) fetchData();
  }, [query]);

  return { data, isLoading };
};
