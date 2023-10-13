import React from "react";
import logo from "./logo.svg";
import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./Router/MainRouter";

function App() {
  return (
    <div>
      <RouterProvider router={MainRouter} />
    </div>
  );
}

export default App;
