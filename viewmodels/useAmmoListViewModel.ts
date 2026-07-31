import { useState, useEffect } from 'react';
import { getAmmoOptions } from '../services/ammoRepository';
import { AmmoOption } from '../models/Ammo';

export const useAmmoListViewModel = () => {
  const [ammoOptions, setAmmoOptions] = useState<AmmoOption[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);
        const data = await getAmmoOptions();
        setAmmoOptions(data);
      } catch (error) {
        console.error('Error fetching ammo list:', error);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, []);

  return { ammoOptions, isLoading };
};
