import React, { FC } from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { quizAiItem, chatItem, agentsItem, dashboardItem } from "./MenuItems";

interface menuItems {
  label: string,
  key: string,
  icon: any,
  children?: [],
  type?: any,
  disabled?: boolean
}

const itemsList = [dashboardItem[0], quizAiItem[0], chatItem[0], agentsItem[0]];

const BurguerMenu: FC = () => {
  const navigate = useNavigate();
 
  const items = itemsList.map((element) => ({
    label: (
      <span className="menu-items-movil" onClick={() => navigate(`/${element.key}`)}>
        {element.icon}
        {element.label}
      </span>
    ),
    key: element.key,
  }));

  return (
    <Dropdown
      className="burguer-container"
      menu={{ items }}
      trigger={["click"]}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space className="burguer-item">
          <Menu color="#8A038C" />
        </Space>
      </a>
    </Dropdown>
  );
};

export default BurguerMenu;
