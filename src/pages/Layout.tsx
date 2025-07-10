import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => (
  <div className="min-h-screen bg-base-100 flex flex-col items-center justify-center">
    <Navbar/>
    <main className="w-full flex flex-1 flex-col items-center justify-center">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;