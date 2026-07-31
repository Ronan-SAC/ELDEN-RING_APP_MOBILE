import { useState, useEffect } from 'react';
import { getShieldOptions } from '../services/shieldRepository';
import { ShieldOption } from '../models/Shield';

export const useShieldListViewModel = () => {
  const [shieldOptions, setShieldOptions] = useState<ShieldOption[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);
        const data = await getShieldOptions();
        setShieldOptions(data);
      } catch (error) {
        console.error('Error fetching shield list:', error);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, []);

  return { shieldOptions, isLoading };
};
