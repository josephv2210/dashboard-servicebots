import { Layout } from "antd";
import logo from "./../../assets/png/logo.png";
const { Header } = Layout;
import { useWebContext } from "../../hooks/useWebContext";

import BurguerMenu from "./BurguerMenu";
function MainHeader() {
  const { isMobile } = useWebContext();

  return (
    <Header className={`header ${isMobile && "headerMovile"}`}>
      {isMobile && <BurguerMenu />}
      <div className="header-logo-container">
        <img src={logo} alt="" className="header-logo" />
      </div>
    </Header>
  );
}

export default MainHeader;
