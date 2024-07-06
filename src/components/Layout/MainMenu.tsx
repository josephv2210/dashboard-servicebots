import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Menu, Button, Typography } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

import { quizAiItem, chatItem, agentsItem, dashboardItem } from "./MenuItems";

const { Sider } = Layout;
const { Text } = Typography;

const items = [dashboardItem[0], quizAiItem[0], chatItem[0], agentsItem[0]];

function MainMenu() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(true);

  let menuButton = {};

  if (collapsed) {
    menuButton = {
      textAlign: "center",
      paddingTop: 20,
      paddingBottom: 10,
    };
  } else {
    menuButton = {
      textAlign: "right",
      paddingTop: 20,
      paddingBottom: 10,
    };
  }


  const onCollapseHandler = (value: boolean) => {
    setCollapsed(value);
  };

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapseHandler}
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
