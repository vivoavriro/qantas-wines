import { useEffect, useState } from 'react';

import { fetchWineList } from './fetchWineList';
import { fetchWineListResponse } from './fetchWineList.types';

export const useFetchWineListQuery = () => {
  const [data, setData] = useState<fetchWineListResponse['data'] | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [Error, setError] = useState(false);

  useEffect(() => {
    fetchWineList()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { data, isLoading, Error };
};
