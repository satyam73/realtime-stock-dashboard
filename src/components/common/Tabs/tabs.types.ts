import { Tab } from "@/src/types";

export type TabsProps = {
  tabs: Tab[];
  activeTabIndex: number;
  onTabClick: (index:number) => void;
};
