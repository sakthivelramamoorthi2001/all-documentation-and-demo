import { Outlet, useParams } from "react-router-dom";

import Error from "./Error";

const app = () => {
  const { key } = useParams();
  console.log(key, "ss");
  return <> {key == "12" ? <Outlet /> : <Error />}</>;
};

export default app;
