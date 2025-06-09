import { RouterProvider } from "react-router";
import "./App.css";
import { router } from "./Router";
import React from "react";


function App() {
  return ( <>
  <RouterProvider router={router}></RouterProvider>
  </>
  );
}

export default App;
