import { ref, type UnwrapRef } from 'vue';

type Config = {
  immediately?: boolean;
};

/**
 * Function fetch data and return it in reactive variable data,
 * The isFetching flag specifies whether data is currently being fetched
 * @param {string} url URL address to request
 * @param {Config} config unnecessary configuration
 * @returns {Object} data is fetched data, isFetching flag, isError flag, refetch - function to refetch data
 */
export const useFetch = <T = any>(url: string, config?: Config) => {
  const defaultConfig: Config = {
    immediately: true
  };

  const preparedConfig = config
    ? {
        ...defaultConfig,
        ...config
      }
    : { ...defaultConfig };

  const data = ref<T | null>(null);
  const isFetching = ref(false);
  const isError = ref(false);

  const refetch = async () => {
    try {
      isFetching.value = true;

      data.value = null;
      const response = await fetch(url);
      data.value = (await response.json()) as UnwrapRef<T>;
    } catch {
      isError.value = true;
    } finally {
      isFetching.value = false;
    }
  };

  if (preparedConfig?.immediately) {
    refetch();
  }

  return { data, isFetching, isError, refetch };
};
