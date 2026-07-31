import { useState, useEffect } from 'react';
import { getSorceryOptions } from '../services/sorceryRepository';
import { SorceryOption } from '../models/Sorcery';

export const useSorceryListViewModel = () => {
  const [sorceryOptions, setSorceryOptions] = useState<SorceryOption[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);
        const data = await getSorceryOptions();
        setSorceryOptions(data);
      } catch (error) {
        console.error('Error fetching sorcery list:', error);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, []);

  return { sorceryOptions, isLoading };
};
