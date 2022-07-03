import { useCallback } from 'react';
import { useMutation } from 'react-query';

import useHttpClient from './useHttpClient';

const useCardClient = () => {
  const httpClient = useHttpClient();

  const saveGame = useMutation((data) => {
    return httpClient.post('game', data).then((res) => res.data);
  });

  const getGames = useCallback(() => {
    return httpClient.get('game').then((res) => res.data);
  }, [httpClient]);

  return { saveGame: saveGame.mutateAsync, getGames };
};

export default useCardClient;
