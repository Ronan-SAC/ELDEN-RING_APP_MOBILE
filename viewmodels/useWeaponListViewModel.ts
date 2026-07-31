import { useState, useEffect } from 'react';
import { getWeaponOptions } from '../services/weaponRepository';
import { WeaponOption } from '../models/Weapon';

export const useWeaponListViewModel = () => {
  const [weaponOptions, setWeaponOptions] = useState<WeaponOption[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);
        const data = await getWeaponOptions();
        setWeaponOptions(data);
      } catch (error) {
        console.error('Error fetching weapon list:', error);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, []);

  return { weaponOptions, isLoading };
};
