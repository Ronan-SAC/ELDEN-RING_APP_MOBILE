import { useState, useEffect } from 'react';
import { getClassDetails } from '../services/classRepository';
import { EldenClass } from '../models/Class';

export const useClassDetailsViewModel = (query: string) => {
  const [data, setData] = useState<EldenClass[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await getClassDetails(query);
        setData(result);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        console.error('Error fetching class details:', error);
      } finally {
        setIsLoading(false);
      }
    };
    if (query) fetchData();
  }, [query]);

  return { data, isLoading };
};
