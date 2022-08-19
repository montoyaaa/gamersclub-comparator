import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./config/theme";
import UsersList from "./pages/UsersComparator";

import { ToastContainer } from "react-toastify";
import GlobalStyle from "./config/globalStyles";

import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <UsersList />
      </ThemeProvider>

      <ToastContainer
        theme="dark"
        toastStyle={{ backgroundColor: "#4a4e67", fontFamily: "Teko" }}
        style={{ fontSize: "18px", letterSpacing: 1 }}
      />
      <GlobalStyle />
    </QueryClientProvider>
  );
};

export default App;
