import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import MainMenu from "./MainMenu";
import MainHeader from "./MainHeader";

function Root() {
  const { Header, Content, Footer } = Layout;
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  // Estilos -----------------------
  const headerStyle = {
    // background: colorBgContainer,
    // textAlign: "center",
    // height: 50,
    // padding: 0,
    // margin: 0,
  };
  const contentStyle = {
    margin: "0px",
    textAlign: "center",
    height: "85vh",
    width: "100%",
  };

  return (
    <Layout className=" layout-container">
      <MainHeader />
      <Layout>
        <MainMenu />
        <div className="container-content">
          <Content className="content">
            <Outlet />
          </Content>
            <Footer className="layout-footer">footer</Footer>
        </div>
      </Layout>
    </Layout>
  );
}

export default Root;
