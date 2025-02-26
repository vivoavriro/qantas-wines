import { renderHook, waitFor } from '@testing-library/react';
import { useFetchWineListQuery } from './fetchWineList.hooks';
import { fetchWineList } from './fetchWineList';
import wineListResponse from '../../assets/data/wine-list-response.json';

vi.mock('./fetchWineList');

describe('useFetchWineListQuery', () => {
  beforeEach(() => {
    vi.mocked(fetchWineList).mockResolvedValue(wineListResponse);
    vi.clearAllMocks();
  });

  it('should return initial loading state', () => {
    const { result } = renderHook(() => useFetchWineListQuery());

    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toBeUndefined();
  });

  it('should return data after fetching', async () => {
    const { result } = renderHook(() => useFetchWineListQuery());

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.data).toEqual(wineListResponse.data);
  });

  it('should handle errors', async () => {
    vi.mocked(fetchWineList).mockRejectedValueOnce('Failed to fetch');

    const { result } = renderHook(() => useFetchWineListQuery());

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.data).toBeUndefined();
    expect(result.current.Error).toBe('Failed to fetch');
  });
});
