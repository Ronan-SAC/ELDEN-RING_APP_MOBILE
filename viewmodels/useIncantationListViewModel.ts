import { useState, useEffect } from 'react';
import { getIncantationOptions } from '../services/incantationRepository';
import { IncantationOption } from '../models/Incantation';

export const useIncantationListViewModel = () => {
  const [incantationOptions, setIncantationOptions] = useState<IncantationOption[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);
        const data = await getIncantationOptions();
        setIncantationOptions(data);
      } catch (error) {
        console.error('Error fetching incantation list:', error);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, []);

  return { incantationOptions, isLoading };
};
