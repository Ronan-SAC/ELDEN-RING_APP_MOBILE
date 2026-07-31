import { fetchAllClasses, fetchClassByName } from './api';
import { EldenClass, ClassOption } from '../models/Class';

export const getClassOptions = (): Promise<ClassOption[]> => fetchAllClasses();

export const getClassDetails = (name: string): Promise<EldenClass[]> => fetchClassByName(name);
