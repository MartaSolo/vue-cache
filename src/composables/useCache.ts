import { ref } from 'vue';
import DEFAULT_TTL from '@/utils/defaultTTL';

interface CacheEntry<T> {
  value: T;
  expiration: number;
}

const cache = ref(new Map<string, CacheEntry<unknown>>());

export const useCache = <T = unknown>() => {
  const setCacheItem = (key: string, value: T, ttl: number = DEFAULT_TTL): void => {
    const expiration = Date.now() + ttl;
    cache.value.set(key, { value, expiration });
  };

  const getEntry = (key: string) => cache.value.get(key) as CacheEntry<T> | undefined;

  const isEntryFresh = (entry: CacheEntry<T>) => Date.now() < entry.expiration;

  const removeCacheItem = (key: string): void => {
    cache.value.delete(key);
  };

  const getCacheItem = (key: string): T | null => {
    const entry = getEntry(key);
    if (entry && isEntryFresh(entry)) return entry.value;
    if (entry) removeCacheItem(key);
    return null;
  };

  const hasCacheItem = (key: string): boolean => {
    const entry = getEntry(key);
    if (entry && isEntryFresh(entry)) return true;
    if (entry) removeCacheItem(key);
    return false;
  };

  const clearCache = (): void => cache.value.clear();

  return { cache, setCacheItem, getCacheItem, removeCacheItem, hasCacheItem, clearCache };
};
