import { useState, useEffect } from 'react';
import { getAmmoDetails } from '../services/ammoRepository';
import { Ammo } from '../models/Ammo';

export const useAmmoDetailsViewModel = (query: string) => {
  const [data, setData] = useState<Ammo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await getAmmoDetails(query);
        setData(result);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        console.error('Error fetching ammo details:', error);
      } finally {
        setIsLoading(false);
      }
    };
    if (query) fetchData();
  }, [query]);

  return { data, isLoading };
};
