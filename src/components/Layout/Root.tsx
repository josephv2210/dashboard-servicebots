import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import MainMenu from "./MainMenu";
import MainHeader from "./MainHeader";
import { useWebContext } from '../../hooks/useWebContext'

function Root() {
  const { Content, Footer } = Layout;
  
  const { isMobile } = useWebContext();

  return (
    <Layout className=" layout-container">
      <MainHeader />
      <Layout>
        {!isMobile && <MainMenu />}        
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
