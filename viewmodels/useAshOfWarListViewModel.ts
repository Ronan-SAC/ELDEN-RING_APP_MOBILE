import { useState, useEffect } from 'react';
import { getAshOfWarOptions } from '../services/ashOfWarRepository';
import { AshOfWarOption } from '../models/AshOfWar';

export const useAshOfWarListViewModel = () => {
  const [ashOfWarOptions, setAshOfWarOptions] = useState<AshOfWarOption[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);
        const data = await getAshOfWarOptions();
        setAshOfWarOptions(data);
      } catch (error) {
        console.error('Error fetching ash of war list:', error);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, []);

  return { ashOfWarOptions, isLoading };
};
