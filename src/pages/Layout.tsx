import { Outlet } from "react-router-dom";

const Layout = () => (
  <div className="min-h-screen bg-[#333] flex flex-col items-center justify-center">
    <main className="w-full flex-1 flex flex-col items-center justify-center">
      <Outlet />
    </main>
  </div>
);

export default Layout;