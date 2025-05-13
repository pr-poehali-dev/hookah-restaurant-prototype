import React from "react";
import { Tabs, TabsList } from "@/components/ui/tabs";
import HookahMenuTab from "./hookah-menu/HookahMenuTab";
import HookahMenuList from "./hookah-menu/HookahMenuList";
import { hookahMenuData } from "./hookah-menu/data";

const HookahMenu: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-hookah-dark to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Меню кальянов
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Широкий выбор ароматов от классики до авторских миксов,
            приготовленных нашими опытными кальянными мастерами
          </p>
        </div>

        <Tabs defaultValue="fruity" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-hookah-dark/50 p-1">
              {hookahMenuData.map((tab) => (
                <HookahMenuTab key={tab.id} tab={tab} />
              ))}
            </TabsList>
          </div>

          {hookahMenuData.map((menu) => (
            <HookahMenuList key={menu.id} menu={menu} />
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default HookahMenu;
