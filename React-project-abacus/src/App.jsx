import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DesktopView } from "./screens/DesktopView";
import { Frame } from "./screens/Frame";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <DesktopView />,
  },
  {
    path: "/desktop-view",
    element: <DesktopView />,
  },
  {
    path: "/frame-1",
    element: <Frame />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
