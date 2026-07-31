import { useState, useEffect } from 'react';
import { getClassOptions } from '../services/classRepository';
import { ClassOption } from '../models/Class';

export const useClassListViewModel = () => {
  const [classOptions, setClassOptions] = useState<ClassOption[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);
        const data = await getClassOptions();
        setClassOptions(data);
      } catch (error) {
        console.error('Error fetching class list:', error);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, []);

  return { classOptions, isLoading };
};
