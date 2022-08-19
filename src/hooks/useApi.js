import { useCallback } from 'react';
import api from '../api';

const getDataOrThrow = async (call) => {
  try {
    const { data } = await call()
    return [null, data.map(i => ({...i, dateFetched: new Date().toISOString() }))]
  } catch(ex){
    return [ex, null];
  }
}

export const usePosts = () => {
  const getPosts = useCallback(async () => {
    return await getDataOrThrow(api.posts.getPosts);
  }, [])
  return {getPosts};
}