import {
  RobotOutlined,
  CommentOutlined,
  BarChartOutlined,
  SettingOutlined,
  LogoutOutlined,
  HomeOutlined,
  FormOutlined,
  CarOutlined,
} from "@ant-design/icons";

import { LayoutDashboard } from "lucide-react";

const adminData = [
  {
    label: "Settings",
    key: "settings",
    icon: <SettingOutlined style={{ fontSize: 20 }} />,
    children: [],
  },
];

const form = [
  {
    label: "Permisos",
    key: "permissions",
    icon: <FormOutlined style={{ fontSize: 20 }} />,
    children: [],
  },
];

const reports = [
  {
    label: "Reports",
    key: "reports",
    icon: <BarChartOutlined style={{ fontSize: 20 }} />,
    children: [],
  },
];

const home = [
  {
    label: "Home",
    key: "/",
    icon: <LayoutDashboard style={{ fontSize: 20 }} />,
    children: [],
  },
];

const assets = [
  {
    label: "Assets",
    key: "assets-settings",
    icon: <CarOutlined style={{ fontSize: 20 }} />,
    children: [],
  },
];

const getItem = (
  label: string,
  key: string,
  icon: any,
  children?: [],
  type?: any,
  disabled?: boolean
) => {
  return {
    key,
    icon,
    children,
    label,
    type,
    disabled,
  };
};

const formItem = form.map((item) => {
  return getItem(item.label, item.key, item.icon);
});

const reportsItem = reports.map((item) => {
  return getItem(item.label, item.key, item.icon);
});

const adminItem = adminData.map((item) => {
  return getItem(item.label, item.key, item.icon);
});

const homeItem = home.map((item) => {
  return getItem(item.label, item.key, item.icon);
});

const assetsItem = assets.map((item) => {
  return getItem(item.label, item.key, item.icon);
});

export { formItem, adminItem, reportsItem, homeItem, assetsItem };
