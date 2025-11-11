import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Dashboard";
import Pots from "./pages/Pots";
import Transactions from "./pages/Transactions";
import Reccuring from "./pages/Reccuring";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="pots" element={<Pots />} />
          <Route path="pots" element={<Pots />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="reccuring" element={<Reccuring />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
