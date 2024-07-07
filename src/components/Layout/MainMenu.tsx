import { useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";

import { quizAiItem, chatItem, agentsItem, dashboardItem } from "./MenuItems";

const { Sider } = Layout;

const items = [dashboardItem[0], quizAiItem[0], chatItem[0], agentsItem[0]];

function MainMenu() {
  const navigate = useNavigate();

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={true}
      className="sider-content"
    >
      <Menu
        className="menu-content"
        mode="inline"
        items={items}
        onClick={({ key }) => {
          navigate(key);
        }}
        selectable={true}
      />
    </Sider>
  );
}

export default MainMenu;
