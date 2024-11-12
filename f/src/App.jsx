import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppLayout from "./layout/AppLayout";
import Error from "./error/Error";
import Homepage from "./pages/Homepage";

const routes = [{
  element:<AppLayout/>,
  errorElement:<Error/>,
  children:[
    {index:true,
      element:<Navigate replace to="homepage"/>
    } ,   {path:"homepage",
      element:<Homepage/>
    }
  ]
}]

const router = createBrowserRouter(routes);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
});

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen></ReactQueryDevtools>
        {/* <GlobalProvider> */}
          <RouterProvider router={router}></RouterProvider>
        {/* </GlobalProvider> */}
      </QueryClientProvider>
      <Toaster
        position="bottom-right"
        reverseOrder={true}
        gutter={12}
      ></Toaster>
    </>
  );
}