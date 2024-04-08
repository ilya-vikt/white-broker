import { useFetch } from '@/share/composables/useFetch';
import { endpoints } from '@/share/constants';
import { computed } from 'vue';

const { data, isFetching, isError, refetch } = useFetch<Array<any>>(
  `${endpoints.getPageInfo}?name=buyView`
);

const refetchAppData = (routeName: string) => refetch(`${endpoints.getPageInfo}?name=${routeName}`);
const pageInfo = computed(() => (data.value ? data.value[0] : null));
/**
 * The function requests information about page width a given ID
 * The data is returned in the form of a reactive variable,
 * also returned isFetching - a flag indicating that data is currently being received
 * and an error flag indicating that an error occurred while receiving data
 * @return {Object} pageInfo, isFetching flag, isError flag
 */
export const usePageInfo = () => ({
  pageInfo,
  isFetching,
  isError,
  refetchAppData
});
