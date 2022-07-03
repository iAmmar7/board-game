import { useQuery } from 'react-query';

import { useGameClient } from '../http';

function useGameResource() {
  const { getGames } = useGameClient();
  const { data, error, isLoading } = useQuery(['getGames'], getGames);

  return {
    games: data,
    error,
    loading: isLoading,
  };
}

export default useGameResource;
