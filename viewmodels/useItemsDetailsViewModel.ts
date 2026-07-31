import { useState, useEffect } from 'react';
import { getItemDetails } from '../services/itemsRepository';
import { Item } from '../models/Items';

export const useItemsDetailsViewModel = (query: string) => {
  const [data, setData] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await getItemDetails(query);
        setData(result);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        console.error('Error fetching item details:', error);
      } finally {
        setIsLoading(false);
      }
    };
    if (query) fetchData();
  }, [query]);

  return { data, isLoading };
};
