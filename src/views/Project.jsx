import { useNavigate, useParams } from "react-router-dom";
import jsonData from "../json/index";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import React from "react";
const app = () => {
  const { key } = useParams();
  const navi = useNavigate();
  const [selectedData, setSelectedData] = useState(null);
  const [loading, setloading] = useState(false);

  const checkUrl = () => {
    const isExsist = jsonData.find((i) => i.id == key);
    // if (!isExsist) {
    //   setTimeout(() => {
    //     navi("/");
    //   }, 3000);
    //   return;
    // }
    setSelectedData({ ...isExsist });
    setTimeout(() => {
      setloading(false);
    }, 3000);
  };

  function showComp(type, content) {
    switch (type) {
      case "html":
        return (
          <React.Fragment>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </React.Fragment>
        );
      case "text":
        return <p>{content}</p>;
      case "list":
        return (
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        );
      case "code":
        return (
          <div className="code-box">
            <pre className=" language-jsx">
              {content.map((item, index) => (
                <div>
                  <code key={index}>{item} </code>
                  <br />
                </div>
              ))}
            </pre>
          </div>
        );
      default:
        return <p>something went wrong</p>;
    }
  }

  useEffect(() => {
    setloading(true);
    checkUrl();
  }, []);

  if (loading) {
    return <Loader />;
  }

  console.log(selectedData, "ss");
  return (
    <div>
      {selectedData &&
        selectedData.section.map((i) => {
          return (
            <section
              className="md:p-10 xs:p-2 project-overwrap"
              id={i.name + "-btn"}
            >
              <h1 className="project-heading">{i.name}</h1>
              {i.data.map((item) => showComp(item.type, item.content))}
            </section>
          );
        })}
      {/* {selectedData &&
        selectedData.section.map((i) => this.showComp(i.type, i.content))} */}
    </div>
  );
};

export default app;
