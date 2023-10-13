import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Homescreen from "../Layout/Homescreen";
import Registar from "../auth/Registar";
import Maincards from "../Components/Cards/Maincards";
import Rsvp from "../Components/RSVP/Rsvp";


export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homescreen/>,
      },
    ],
  },
  {
    path: "/registar",
    element: <Registar/>
  },
  {
    path: "/rsvp",
    element: <Rsvp/>
  }
]);
