
import React from 'react';
import { TabsContent } from "@/components/ui/tabs";
import HookahMenuItem from './HookahMenuItem';
import { TabMenuProps } from './types';

interface HookahMenuListProps {
  menu: TabMenuProps;
}

const HookahMenuList: React.FC<HookahMenuListProps> = ({ menu }) => {
  return (
    <TabsContent key={menu.id} value={menu.id} className="animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menu.items.map((item) => (
          <HookahMenuItem
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </TabsContent>
  );
};

export default HookahMenuList;
