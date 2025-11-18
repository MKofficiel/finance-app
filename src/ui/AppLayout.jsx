import { Outlet } from "react-router";
import Sidebar from "../components/navigations/Sidebar";

const AppLayout = () => {
  return (
    <div className="grid min-h-dvh grid-rows-[1fr_auto] lg:grid-cols-[auto_1fr]">
      <Sidebar />
      <main className="border-2 px-4 py-2.5 max-lg:-mb-10 max-lg:pb-10 md:px-10 md:py-8 lg:-ml-10 lg:pl-20">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
