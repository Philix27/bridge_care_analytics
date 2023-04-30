import { ReactNode } from "react";
interface ISidebarItem {
  icon?: ReactNode;
  title: string;
  link: string;
  isTitle?: boolean;
  callBack?: () => void;
  agentType: [];
}

export const sidebarItems: Array<ISidebarItem> = [
  {
    title: "Workloads",
    link: "/",
    isTitle: true,
    agentType: [],
  },
  {
    title: "Cron Job",
    link: "/",
    agentType: [],
  },
  {
    title: "Deamon Sets",
    link: "/",
    agentType: [],
  },
  {
    title: "Deployments",
    link: "/",
    agentType: [],
  },
  {
    title: "Jobs",
    link: "/",
    agentType: [],
  },
  {
    title: "Pods",
    link: "/",
    agentType: [],
  },
  {
    title: "Replica Sets",
    link: "/",
    agentType: [],
  },
  {
    title: "Replication Controllers",
    link: "/",
    agentType: [],
  },
  {
    title: "Stateful Sets",
    link: "/",
    agentType: [],
  },
  {
    title: "Services",
    link: "/",
    isTitle: true,
    agentType: [],
  },
  {
    title: "Deamon Sets",
    link: "/",
    agentType: [],
  },
  {
    title: "Ingress",
    link: "/notifications",
    agentType: [],
  },
  {
    title: "Config",
    link: "/",
    isTitle: true,
    agentType: [],
  },
  {
    title: "Storage",
    link: "/",
    isTitle: true,
    agentType: [],
  },
  {
    title: "Cluster",
    link: "/",
    isTitle: true,
    agentType: [],
  },
  {
    title: "Settings",
    link: "/",
    isTitle: true,
    agentType: [],
  },
  {
    title: "About",
    link: "/",
    isTitle: true,
    agentType: [],
  },
];
