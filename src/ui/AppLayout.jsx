import { Outlet } from "react-router";
import Sidebar from "../components/navigations/Sidebar";

const AppLayout = () => {
  return (
    <div className="grid min-h-dvh grid-rows-[1fr_auto] lg:grid-cols-[auto_1fr]">
      <Sidebar />
      <main className="bg-green -ml-10">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
