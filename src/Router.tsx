import { createBrowserRouter } from "react-router";
import { Layout } from "./Pages/Layout";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { AnimalsID } from "./Pages/AnimalsID";
import { Animals } from "./Pages/Animals";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Animals",
        element: <Animals />,
      },
      {
        path: "/Animals/:id",
        element: <AnimalsID />,
      },
    ],
  },
]);
