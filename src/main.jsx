import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage.jsx";
import Education from "./pages/education/education.jsx";
import Members from "./pages/members/Members.jsx";
import Events from "./pages/events/events.jsx";
import HomePage from "./pages/home/Home.jsx";

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
        element: <Members />,
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
