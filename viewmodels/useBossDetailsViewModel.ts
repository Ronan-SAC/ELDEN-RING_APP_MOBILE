import { useState, useEffect } from 'react';
import { getBossDetails } from '../services/bossRepository';
import { Boss } from '../models/Boss';

export const useBossDetailsViewModel = (bossQuery: string) => {
  const [data, setData] = useState<Boss[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBossData = async () => {
      try {
        setIsLoading(true);
        const result = await getBossDetails(bossQuery);
        setData(result);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (bossQuery) {
      fetchBossData();
    }
  }, [bossQuery]);

  return { data, isLoading };
};
