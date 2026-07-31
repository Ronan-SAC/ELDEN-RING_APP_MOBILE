import { useState, useEffect } from 'react';
import { getLocationOptions } from '../services/locationRepository';
import { LocationOption } from '../models/Location';

export const useLocationListViewModel = () => {
  const [locationOptions, setLocationOptions] = useState<LocationOption[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);
        const data = await getLocationOptions();
        setLocationOptions(data);
      } catch (error) {
        console.error('Error fetching location list:', error);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, []);

  return { locationOptions, isLoading };
};
