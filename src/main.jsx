import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage.jsx";
import Education from "./pages/Education/Education.jsx";
import Members from "./pages/Members/Members.jsx";
import Events from "./pages/Events/Events.jsx";
import HomePage from "./pages/Home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "dao-tao",
        element: <Education />,
      },
      {
        path: "thanh-vien",
        element: <ErrorPage />,
      },
      {
        path: "su-kien",
        element: <Events />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
