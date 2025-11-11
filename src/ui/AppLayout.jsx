import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div>
      <h1 className="text-3xl text-blue-600">bienvemue</h1>

      <Outlet />
    </div>
  );
};

export default AppLayout;
