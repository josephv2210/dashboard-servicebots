
// import { useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  BotMessageSquare,
  MessageCircleMore,
  UsersRound,
} from "lucide-react";

// const navigate = useNavigate();

const dashboard = [
  {
    label: "Dashboard",
    key: "dashboard",
    icon: <LayoutDashboard size={34} color="#999999" />,
    children: [],
  },
];

// const dashboardMovil = [
//   {
//     label: (
//       <span onClick={() => navigate('/dashboard')}>
//         <LayoutDashboard size={34} color="#999999" />
//         Dashboard
//       </span>
//     ),
//     key: "dashboard",
//   },
// ];

const quizAi = [
  {
    label: "Cuestionario AI",
    key: "quizAi",
    icon: <BotMessageSquare size={34} color="#999999" />,
    children: [],
  },
];

const chat = [
  {
    label: "Chat",
    key: "chat",
    icon: <MessageCircleMore size={34} color="#999999" />,
    children: [],
  },
];

const agents = [
  {
    label: "Agentes",
    key: "agents",
    icon: <UsersRound size={34} color="#999999" />,
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
const dashboardItem = dashboard.map((item) => {
  return getItem(item.label, item.key, item.icon);
});

const quizAiItem = quizAi.map((item) => {
  return getItem(item.label, item.key, item.icon);
});

const chatItem = chat.map((item) => {
  return getItem(item.label, item.key, item.icon);
});

const agentsItem = agents.map((item) => {
  return getItem(item.label, item.key, item.icon);
});

export {  quizAiItem, chatItem, dashboardItem, agentsItem };
