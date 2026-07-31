import { useState, useEffect } from 'react';
import { getWeaponDetails } from '../services/weaponRepository';
import { Weapon } from '../models/Weapon';

export const useWeaponDetailsViewModel = (query: string) => {
  const [data, setData] = useState<Weapon[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await getWeaponDetails(query);
        setData(result);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        console.error('Error fetching weapon details:', error);
      } finally {
        setIsLoading(false);
      }
    };
    if (query) fetchData();
  }, [query]);

  return { data, isLoading };
};
