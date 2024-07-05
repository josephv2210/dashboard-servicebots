import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import type { MenuProps } from "antd";
import logo from "./../../assets/png/logo.png"
const { Header, Content, Sider } = Layout;

function MainHeader() {
  return (
    <Header className="header">
        <img src={logo} alt="" className="header-logo"/>
    </Header>
  )
}

export default MainHeader