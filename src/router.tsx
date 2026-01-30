import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import WorldMap from "./pages/WorldMap.page";
import EmptyLayout from "./layouts/EmptyLayout";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [{ path: "/", element: <WorldMap /> }],
  },
  { element: <EmptyLayout />, children: [{ path: "/login" }, { path: "*" }] },
]);

export default router;
