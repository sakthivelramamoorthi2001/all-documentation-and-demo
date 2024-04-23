import React, { useEffect, useMemo, useState } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Popover } from "antd";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import jsonData from "../json/index";
import Loader from "../components/Loader";
import logo from "../assets/images.png";
const { Header, Content, Footer, Sider } = Layout;

const url = [
  {
    name: "Github",
    link: "https://github.com/sakthivelramamoorthi2001",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sakthivel-ramamoorthi-113125231/",
  },
  {
    name: "Portfolio",
    link: "https://web-portfolio-beta-nine.vercel.app/",
  },
  {
    name: "email",
    link: "mailto:sakthivel.ramamoorthi2001@gmail.com",
  },
];

const App = () => {
  const [selectedData, setSelectedData] = useState(null);
  const navi = useNavigate();
  const [loading, setloading] = useState(false);
  const { key } = useParams();

  const checkUrl = () => {
    const isExsist = jsonData.find((i) => i.id == key);
    if (!isExsist) {
      setTimeout(() => {
        navi("/");
      }, 3000);
      return;
    }
    setSelectedData({ ...isExsist });
    setTimeout(() => {
      setloading(false);
    }, 2000);
  };

  const handleClickSideNav = (id) => {
    window.location.hash = id;
  };

  useEffect(() => {
    setloading(true);
    checkUrl();
  }, []);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  if (loading) {
    return <Loader />;
  }

  return (
    <Layout className="">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="font-mono font-semibold  ">
          {/* <img src={logo} alt={logo} className="h-[100px]" /> */}
        </div>
        <Menu
          theme="dark"
          className="mt-[80px]"
          mode="inline"
          onClick={(e) => {
            handleClickSideNav(e.key + "-btn");
          }}
          items={
            selectedData &&
            selectedData.section.map((i) => ({
              key: i.name,
              icon: null,
              label: i.name,
            }))
          }
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
          className="text-center flex flex-col align-middle items-center justify-center relative"
        >
          <div className="font-mono text-2xl  ">All Documentation and Demo</div>
          <h4 className="max-h-fit h-2 ">
            {selectedData && selectedData.project.project_name}{" "}
            <span>{selectedData && selectedData.project.version}</span>
          </h4>

          <Popover
            placement="leftBottom"
            className="absolute right-[25px]"
            content={
              <>
                {url.map((i) => {
                  return (
                    <a
                      href={i.link}
                      target="_blank"
                      className={
                        "p-3 text-[16px] capitalize flex justify-start items-center  hover:bg-[#1677ff] rounded-md  hover:text-white"
                      }
                    >
                      {i.name}
                    </a>
                  );
                })}
              </>
            }
          >
            <div className="p-2 flex justify-start items-center h-1/2 cursor-pointer bg-[#1677ff]  rounded-md">
              <p className="text-white text-[16px]"> Self Profile</p>
            </div>
          </Popover>
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: "100vh",
              overflow: "scroll",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet data={selectedData} />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Designed and Built with ❤️ in Sakthivel Ramamoorthi
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
