import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu, Button, Typography } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';


import {
  homeItem,
  adminItem,
  formItem,
  reportsItem,
  assetsItem,
} from './MenuItems';

const { Sider } = Layout;
const { Text } = Typography;

const items = [
  homeItem[0],
  adminItem[0],
  assetsItem[0],
  formItem[0],
  reportsItem[0],
];

function MainMenu() {
    const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(true);

  let menuButton = {
  };

  if (collapsed) {
    menuButton = {
      textAlign: 'center', 
      paddingTop: 20, 
      paddingBottom: 10
    };
  } else {
    menuButton = {
      textAlign: 'right', 
      paddingTop: 20, 
      paddingBottom: 10
    };
  }

  const menuStyle = {
    backgroundColor: '#fff',
    // color: '#333F50',
    borderRadius: '0px 20px 20px 0px',
    maxWidth: 200,
    minHeight: '50vh',
  };

  const onCollapseHandler = (value: boolean) => {
    setCollapsed(value);
  };


  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapseHandler}
      className='sider-content'
    >
      <Menu
        className='menu-content'
        mode="inline"
        items={items}
        onClick={({ key }) => {
          if (key === "openClose") {
            setCollapsed(!collapsed);
          } else {
            navigate(key);
          }
        }}
        selectable={true}
      />
    </Sider>
  );
}

export default MainMenu;
