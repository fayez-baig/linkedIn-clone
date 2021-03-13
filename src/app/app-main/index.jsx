import { Route, BrowserRouter } from "react-router-dom";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { LayoutContainer } from "../domians/Layout/containers/index";

const queryCache = new QueryCache();
const queryClient = new QueryClient({
  queryCache,
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Route path="/" component={LayoutContainer} />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
