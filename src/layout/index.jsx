import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export const Layout = () => {
  return (
    <main className="w-full min-h-screen bg-surface">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};
