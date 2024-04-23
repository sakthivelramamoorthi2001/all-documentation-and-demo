import { Space, Spin } from "antd";
import loadingif from "../assets/loading.gif";

const Loader = (props) => (
  <div className=" h-[80vh] w-full  flex flex-row items-center justify-center">
    <img src={loadingif} className="w-[380px] h-[200px]" alt="loading" />
  </div>
);

export default Loader;
