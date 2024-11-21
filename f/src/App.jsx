import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Homepage from "./pages/mainPage/Homepage";
import GlobalProvider from "./context/GlobalProvider";
import AppLayout from "./layout/AppLayout";
import RegistryUserList from "./pages/staff/RegistryUserList";
import Error from "./reusable/components/componentsLvl1/Error";
import RegistryUserForm from "./pages/staff/RegistryUserForm";

const routes = [
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Navigate replace to="homepage" />,
      },
      // {
      //   path: "*",
      //   element: <Homepage />,
      // },
      {
        path: "homepage",
        element: <Homepage />,
      },

      {
        path: "homepage/registryUserList",
        element: <RegistryUserList />,
      },
      {
        path: "homepage/registryUserList/registryUserForm",
        element: <RegistryUserForm />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});

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
        <GlobalProvider>
          <RouterProvider
            future={{
              v7_startTransition: true,
            }}
            router={router}
          ></RouterProvider>
        </GlobalProvider>
      </QueryClientProvider>
      <Toaster
        position="bottom-right"
        reverseOrder={true}
        gutter={12}
      ></Toaster>
    </>
  );
}
