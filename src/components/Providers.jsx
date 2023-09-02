import { SearchProvider } from "../hooks/useSearch";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { QueryClient } from "@tanstack/react-query";

const theme = createTheme({
  breakpoints: {
    values: {
      sm: 0,
      md: 640,
      lg: 1024,
      xl: 1200,
    },
  },
});

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1200000, // 20 minutes
      staleTime: 900000, // 15 minutes
      retry: 0,
    },
  },
});

export const Providers = ({ children }) => {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      <ThemeProvider theme={theme}>
        <SearchProvider>{children}</SearchProvider>
      </ThemeProvider>
    </PersistQueryClientProvider>
  );
};
