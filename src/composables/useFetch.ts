import { ref } from 'vue';

interface FetchOptions {
  ttl?: number;
  fetchOptions?: RequestInit;
}

export const useFetch = <T>(url: string, options?: FetchOptions) => {
  const data = ref<T | null>(null);
  const error = ref<unknown | null>(null);
  const loading = ref(false);

  const fetchData = async () => {
    loading.value = true;
    try {
      const response = await fetch(url, options?.fetchOptions);

      if (!response.ok) throw new Error('Response is not ok');

      data.value = await response.json();
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  return {
    fetchData,
    data,
    error,
    loading,
  };
};
