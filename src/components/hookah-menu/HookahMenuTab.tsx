
import React from 'react';
import { TabsTrigger } from "@/components/ui/tabs";
import Icon from '@/components/ui/icon';
import { TabMenuProps } from './types';

interface HookahMenuTabProps {
  tab: TabMenuProps;
}

const HookahMenuTab: React.FC<HookahMenuTabProps> = ({ tab }) => {
  return (
    <TabsTrigger 
      key={tab.id} 
      value={tab.id}
      className="data-[state=active]:bg-hookah-purple data-[state=active]:text-white"
    >
      <Icon name={tab.icon} className="mr-2" size={16} />
      {tab.label}
    </TabsTrigger>
  );
};

export default HookahMenuTab;
