import { ReactNode } from "react";

interface ISidebarItem {
  icon?: ReactNode;
  title: string;
  link: string;
  callBack?: () => void;
  agentType: [];
}

export const sidebarItems: Array<ISidebarItem> = [
  {
    title: "HOME",
    link: "/",
    agentType: [],
  },
  {
    title: "NOTIFICATION",
    link: "/notifications",
    agentType: [],
  },
  {
    title: "KUBE",
    link: "/kube",
    agentType: [],
  },

  {
    title: "LOGS",
    link: "/notes",
    agentType: [],
  },
  {
    title: "ACCOUNTING",
    link: "/addnotes",
    agentType: [],
  },

  {
    // icon: <FaMoneyBill />,
    title: "PAYMENT",
    link: "/goals",
    agentType: [],
  },
  {
    title: "BROKER",
    link: "/bookmarks",
    agentType: [],
  },
  {
    title: "CARDS",
    link: "/chat",
    agentType: [],
  },

  {
    title: "WALLET",
    link: "/help",
    agentType: [],
  },
  {
    title: "ACCOUNT",
    link: "/#",
    agentType: [],
  },
];
