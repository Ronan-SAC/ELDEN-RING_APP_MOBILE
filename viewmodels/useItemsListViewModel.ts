import { useEffect, useState } from "react";
import { getItemOptions } from "../services/itemsRepository";
import { ItemOption } from "../models/Items";

export const useItemsListViewModel = () => {
    const [itemOptions, setItemOptions] = useState<ItemOption[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const load = async () => {
            try {
                setIsLoading(true);
                const data = await getItemOptions();
                setItemOptions(data);
            } catch (error) {
                console.error("Error fetching item list:", error);
            } finally {
                setIsLoading(false);
            }
        };
        load();
    }, []);

    return { itemOptions, isLoading };
};
