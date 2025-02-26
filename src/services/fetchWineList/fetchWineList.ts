import wineListResponse from '../../assets/data/wine-list-response.json';
import { fetchWineListResponse } from './fetchWineList.types';

export const fetchWineList = (): Promise<fetchWineListResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(wineListResponse);
    }, 400);
  });
};
