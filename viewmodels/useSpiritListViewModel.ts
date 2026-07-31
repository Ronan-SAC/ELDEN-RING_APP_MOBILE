import { useState, useEffect } from 'react';
import { getSpiritOptions } from '../services/spiritRepository';
import { SpiritOption } from '../models/Spirit';

export const useSpiritListViewModel = () => {
  const [spiritOptions, setSpiritOptions] = useState<SpiritOption[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);
        const data = await getSpiritOptions();
        setSpiritOptions(data);
      } catch (error) {
        console.error('Error fetching spirit list:', error);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, []);

  return { spiritOptions, isLoading };
};
