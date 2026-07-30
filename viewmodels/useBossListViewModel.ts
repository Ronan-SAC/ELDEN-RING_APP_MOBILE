import { useState, useEffect } from 'react';
import { getBossOptions } from '../services/bossRepository';

interface BossOption {
  name: string;
  image: string;
}

export const useBossListViewModel = () => {
  const [bossOptions, setBossOptions] = useState<BossOption[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);
        const data = await getBossOptions();
        setBossOptions(data);
      } catch (error) {
        console.error("Error fetching boss list:", error);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, []);

  return { bossOptions, isLoading };
};
