import { ref } from 'vue';
import { defu } from 'defu';
import { useCache } from '@/composables/useCache';
import DEFAULT_TTL from '@/utils/defaultTTL';

interface FetchOptions {
  ttl?: number;
  fetchOptions?: RequestInit;
}

export const useFetch = <T>(url: string, customOptions?: FetchOptions) => {
  const data = ref<T | null>(null);
  const error = ref<unknown | null>(null);
  const loading = ref(false);
  const fromCache = ref(false);

  const { cache, setCacheItem, getCacheItem, removeCacheItem } = useCache<T>();

  const defaultOptions = {
    ttl: DEFAULT_TTL,
    fetchOptions: {
      headers: {
        Accept: 'application/json',
      },
    },
  };

  const options = defu(customOptions, defaultOptions);

  const fetchData = async () => {
    loading.value = true;
    try {
      const cachedData = getCacheItem(url);

      if (cachedData) {
        data.value = cachedData;
        fromCache.value = true;
      } else {
        const response = await fetch(url, options.fetchOptions);
        if (!response.ok) throw new Error('Response is not ok');
        data.value = await response.json();
        setCacheItem(url, data.value, options.ttl);
      }
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  const refresh = () => {
    removeCacheItem(url);
    fetchData();
  };

  fetchData();

  return {
    fetchData,
    refresh,
    data,
    error,
    loading,
  };
};
