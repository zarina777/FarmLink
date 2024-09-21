import { Outlet, useLocation } from "react-router-dom";
import Admin from "../../admin";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Layout = () => {
  let loc = useLocation();
  return loc.pathname !== "admin" ? (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  ) : (
    <Admin />
  );
};

export default Layout;
