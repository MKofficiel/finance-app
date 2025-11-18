import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import AppLayout from "./ui/AppLayout";
import Pots from "./pages/Pots";
import Transactions from "./pages/Transactions";
import Reccuring from "./pages/Reccuring";
import Dashboard from "./pages/Overview";
import Budgets from "./pages/Budgets";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
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
  );
};

export default App;
