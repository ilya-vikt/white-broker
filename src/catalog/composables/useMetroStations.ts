import { useFetch } from '@/share/composables/useFetch';
import { endpoints } from '@/share/constants';

type MetroStations = {
  id: number;
  colorIcon: string;
  caption: string;
}[];

const { data, isFetching, isError } = useFetch<MetroStations>(endpoints.getMetroStations);

export const useMetroStations = () => ({
  metroStations: data,
  isFetching,
  isError
});
