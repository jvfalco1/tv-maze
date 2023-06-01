import { Show } from '@commons/types/responses/shows';
import { useCallback, useMemo, useState } from 'react';
import { MMKV, useMMKVObject } from 'react-native-mmkv';

export const storage = new MMKV();

const useFavorites = () => {
  const [favorites] = useMMKVObject<Show[]>('favorites');
  const [query, setQuery] = useState('');

  const filteredData = useMemo(() => {
    if (!favorites || !query) {
      return;
    }
    return favorites.filter((item) => item?.name?.toLowerCase().includes(query.toLowerCase()));
  }, [favorites, query]);

  const handleAddFavorite = useCallback((show: Show) => {
    if (!show) {
      return;
    }

    const storagedData = storage.getString('favorites');

    if (!storagedData) {
      return storage.set('favorites', JSON.stringify([show]));
    }

    const favShows: Show[] = JSON.parse(storagedData);

    const found = favShows.some((el) => el.id === show.id);

    if (found) {
      const favItems = favShows.filter((fav) => {
        return fav.id !== show.id;
      });

      return storage.set('favorites', JSON.stringify(favItems));
    }
    favShows.push(show);

    return storage.set('favorites', JSON.stringify(favShows));
  }, []);

  console;

  const handleClearAllFavorites = useCallback(() => {
    storage.clearAll();
  }, []);

  const handleSearch = useCallback((q: string) => {
    setQuery(q);
  }, []);

  return {
    states: {
      favorites,
      filteredData,
    },
    functions: {
      handleSearch,
      handleAddFavorite,
      handleClearAllFavorites,
    },
  };
};

export default useFavorites;
