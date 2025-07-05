import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => (
  <div className="min-h-screen bg-base-100 flex flex-col items-center justify-center">
    <Navbar/>
    <main className="w-full flex-1 flex flex-col items-center justify-center">
      <Outlet />
    </main>
  </div>
);

export default Layout;