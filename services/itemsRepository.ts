import { fetchAllItems, fetchItemByName } from "./api";
import { Item, ItemOption } from "../models/Items";

export const getItemOptions = async (): Promise<ItemOption[]> => fetchAllItems();

export const getItemDetails = async (name: string): Promise<Item[]> => fetchItemByName(name);