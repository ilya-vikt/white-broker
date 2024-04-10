export const endpoints = {
  getAppConfig: `${import.meta.env.VITE_API_URL}/appconfig`,
  getPageInfo: `${import.meta.env.VITE_API_URL}/pageinfo`,
  getMetroStations: `${import.meta.env.VITE_API_URL}/metrostations`
} as const;
