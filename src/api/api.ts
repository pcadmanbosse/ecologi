import { PlantedTree,TreeResponse } from '../types/types';
import axios from "axios";

const ROOT = 'https://x.api.ecologi.com';

export const getTrees = async ():Promise<PlantedTree[]> => {
  const response = await axios.get<any, TreeResponse>(`${ROOT}/trees`);
  return response.data.data;
};