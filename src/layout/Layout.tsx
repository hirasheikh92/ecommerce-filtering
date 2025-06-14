import { Outlet } from "react-router";
import { lazy } from "react";
import TopSellers from "../components/TopSellers";
import PopularBlogs from "../components/PopularBlogs";
const Sidebar = lazy(() => import("../components/Sidebar"));
const Layout = () => {
  return (
    <div className="min-h-screen max-w-screen mx-auto px-4 py-2">
       <div className="grid grid-cols-1 gap-2 px-4 md:grid-cols-[1fr_2fr_1fr] ">
      {/* Sidebar */}
      <div className="order-1 md:order-none">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="order-2 md:order-none rounded w-full flex flex-col">
        <Outlet />
      </main>

      {/* Right Sidebar (TopSellers & PopularBlogs) */}
      <div className="order-3 md:order-none hidden  lg:block space-y-4">
        <TopSellers />
        <PopularBlogs />
      </div>
    </div>
    </div>
  );
};

export default Layout;
