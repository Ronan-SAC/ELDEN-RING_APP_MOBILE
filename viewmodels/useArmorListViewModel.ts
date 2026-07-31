import { useState, useEffect } from 'react';
import { getArmorOptions } from '../services/armorRepository';
import { ArmorOption } from '../models/Armor';

export const useArmorListViewModel = () => {
  const [armorOptions, setArmorOptions] = useState<ArmorOption[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);
        const data = await getArmorOptions();
        setArmorOptions(data);
      } catch (error) {
        console.error('Error fetching armor list:', error);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, []);

  return { armorOptions, isLoading };
};
