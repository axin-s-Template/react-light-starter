import Navigation from "@/components/Navigation";
import { Outlet } from "react-router-dom";

/** 基础布局组件 */
export default function BaseLayout() {
  return (
    <div className="layout relative mx-auto h-screen w-full max-w-7xl px-6 md:px-8 lg:px-12">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <footer className="bg-gray-200 p-4 text-center">© {new Date().getFullYear()} 鱼鸢网络</footer>
    </div>
  );
}
