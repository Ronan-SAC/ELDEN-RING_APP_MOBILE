import { useState, useEffect } from 'react';
import { getLocationDetails } from '../services/locationRepository';
import { Location } from '../models/Location';

export const useLocationDetailsViewModel = (query: string) => {
  const [data, setData] = useState<Location[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await getLocationDetails(query);
        setData(result);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        console.error('Error fetching location details:', error);
      } finally {
        setIsLoading(false);
      }
    };
    if (query) fetchData();
  }, [query]);

  return { data, isLoading };
};
