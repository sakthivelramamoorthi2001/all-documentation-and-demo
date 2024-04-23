import React, { useEffect, useMemo, useState } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import jsonData from "../json/index";
import Loader from "../components/Loader";

const { Header, Content, Footer, Sider } = Layout;
const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  UserOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

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
    }
    setSelectedData({ ...isExsist });
    setTimeout(() => {
      setloading(false);
    }, 2000);
  };

  useEffect(() => {
    if (selectedData) {
    }
  }, [selectedData]);

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
          All Documentation and Demo
        </div>
        <Menu
          theme="dark"
          className="mt-[80px]"
          mode="inline"
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
          className="text-center flex align-middle items-center justify-center"
        >
          <div className="font-mono text-2xl  ">All Documentation and Demo</div>
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
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
