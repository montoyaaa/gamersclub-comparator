import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./config/theme";
import UsersList from "./features/UsersComparator";

import GlobalStyle from "./config/globalStyles";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <UsersList />
      </ThemeProvider>
      <GlobalStyle />
    </QueryClientProvider>
  );
};

export default App;
