import { useFetch } from '@/share/composables/useFetch';
import { endpoints } from '@/share/constants';

type AppConifg = {
  mainMenu: [
    {
      id: number;
      caption: string;
      href: string;
    }
  ];
  headerPhone: {
    href: string;
    caption: string;
  };
};

const { data, isFetching, isError } = useFetch<AppConifg>(endpoints.getAppConfig);

/**
 * The function requests configuration data from the server for the application,
 * such as the configuration of the main and footer menus, phone numbers, contacts, etc.
 * The data is returned in the form of a reactive variable,
 * also returned isFetching - a flag indicating that data is currently being received
 * and an error flag indicating that an error occurred while receiving data
 * @return {Object} appConfig, isFetching flag, isError flag
 */
export const useAppConfig = () => ({
  appConfig: data,
  isFetching,
  isError
});
