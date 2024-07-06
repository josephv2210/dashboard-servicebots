import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import MainMenu from "./MainMenu";
import MainHeader from "./MainHeader";
import { useWebContext } from '../../hooks/useWebContext'
import  Footer  from './Footer'

function Root() {
  const { Content} = Layout;
  
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
            <Footer />
        </div>
      </Layout>
    </Layout>
  );
}

export default Root;
