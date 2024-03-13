import { Tab } from "@/src/types";
import { MouseEvent, ReactNode } from "react";

export type TabsProps = {
  tabs: Tab[];
  activeTabIndex: number;
  onTabClick: (e: MouseEvent<HTMLElement>, index:number) => void;
};
