import { useFetch } from '@/share/composables/useFetch';
import { endpoints } from '@/share/constants';

type AppConfig = {
  mainMenu: {
    id: number;
    caption: string;
    href: string;
  }[];
  footerMenu: {
    title: {
      id: number;
      caption: string;
      href: string;
    };
    subMenu: {
      id: number;
      caption: string;
      href: string;
    }[];
  }[];
  headerPhone: {
    href: string;
    caption: string;
  };
  footerPhone: {
    href: string;
    caption: string;
  };
  copyright: string;
  creators: {
    text: string;
    href: string;
  };
  socials: {
    telegram: string;
    youtube: string;
    vk: string;
  };
};

const { data, isFetching, isError } = useFetch<AppConfig>(endpoints.getAppConfig);

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
