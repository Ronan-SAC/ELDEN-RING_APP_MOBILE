import { fetchAllLocations, fetchLocationByName } from './api';
import { Location, LocationOption } from '../models/Location';

export const getLocationOptions = (): Promise<LocationOption[]> => fetchAllLocations();

export const getLocationDetails = (name: string): Promise<Location[]> => fetchLocationByName(name);
