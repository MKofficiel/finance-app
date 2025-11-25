import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import AppLayout from "./ui/AppLayout";
import Pots from "./pages/Pots";
import Transactions from "./pages/Transactions";
import Reccuring from "./pages/Reccuring";
import Dashboard from "./pages/Overview";
import Budgets from "./pages/Budgets";
import AuthLayout from "./ui/AuthLayout";
import SignIn from "./features/auth/SignIn";
import SignUp from "./features/auth/SignUp";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
          </Route>

          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="overview" />} />
            <Route path="overview" element={<Dashboard />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="budgets" element={<Budgets />} />
            <Route path="pots" element={<Pots />} />
            <Route path="reccuring-bills" element={<Reccuring />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
