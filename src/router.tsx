import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import WorldMap from "./pages/WorldMap.page";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [{ path: "/", element: <WorldMap /> }],
  },
]);

export default router;
