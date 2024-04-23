import { useRoutes } from "react-router-dom";
import Home from "../components/Home";
import Error from "../components/Error";
import Layout from "../Layout/Layout";
import ProjectList from "../views/ProjectList";
import Project from "../views/Project";
const rout = [
  {
    path: "/",
    element: <ProjectList />,
  },
  {
    path: "/:key",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Project />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
];
const Route = () => {
  console.log("lkjhrouyre");

  return useRoutes(rout);
};

export default Route;
