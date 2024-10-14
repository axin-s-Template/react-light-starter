import { createBrowserRouter, ScrollRestoration } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import ErrorPage from "./Error";
import GiftPage from "./Gift";
import Home from "./Home/index";
import QuestionPage from "./Question";
import RulesPage from "./Rules";

/**
 * 路由配置
 */
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollRestoration getKey={(location) => location.pathname} />
        <BaseLayout />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/q/:id",
        element: <QuestionPage />,
      },
      {
        path: "/rules",
        element: <RulesPage />,
      },
      {
        path: "/gift",
        element: <GiftPage />,
      },
    ],
  },
]);
