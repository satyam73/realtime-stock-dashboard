import { Tab } from "@/src/types";

export type TabsProps = {
  tabs: Tab[];
  activeTabIndex: number;
  isChildrenLoading:boolean;
  onTabClick: (index:number) => void;
};
