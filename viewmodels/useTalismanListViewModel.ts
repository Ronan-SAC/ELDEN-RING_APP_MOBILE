import { useState, useEffect } from 'react';
import { getTalismanOptions } from '../services/talismanRepository';
import { TalismanOption } from '../models/Talisman';

export const useTalismanListViewModel = () => {
  const [talismanOptions, setTalismanOptions] = useState<TalismanOption[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);
        const data = await getTalismanOptions();
        setTalismanOptions(data);
      } catch (error) {
        console.error('Error fetching talisman list:', error);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, []);

  return { talismanOptions, isLoading };
};
