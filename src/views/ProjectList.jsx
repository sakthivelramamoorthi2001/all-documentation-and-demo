import { useNavigate } from "react-router-dom";
import jsonData from "../json/index";
const app = () => {
  const navi = useNavigate();
  return (
    <div className="p-12">
      <div className="flex items-center justify-center">
        <h2 className="text-3xl font-mono font-semibold shadow-md p-2 rounded-md mb-5 uppercase">
          ['Projects', 'RND', 'POC', 'Demo']
        </h2>
      </div>

      <section className="flex items-center justify-center flex-wrap [&>*]:mt-5 [&>*]:mr-5">
        {jsonData.map((i, index) => {
          return (
            <a
              key={index}
              onClick={() => {
                navi(i.id);
              }}
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-[45%] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={i.project.project_img}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <div className="flex items-center justify-between">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {i.project.project_name}
                  </h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {i.project.description}
                </p>
                <div className="w-full [&>*]:m-[1%] ">
                  <button className="w-[48%]   bg-gray-900 text-white rounded-md p-1 capitalize ">
                    Live
                  </button>
                  <button className="w-[48%] bg-gray-900 text-white rounded-md p-1 capitalize ">
                    Github
                  </button>
                </div>
              </div>
            </a>
          );
        })}
      </section>
    </div>
  );
};

export default app;
