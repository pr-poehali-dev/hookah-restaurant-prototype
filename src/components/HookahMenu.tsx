
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from '@/components/ui/icon';

// Интерфейсы для типизации
interface HookahItem {
  id: number;
  name: string;
  description: string;
  price: number;
  isPopular?: boolean;
  isNew?: boolean;
  strength: 'Лёгкий' | 'Средний' | 'Крепкий';
}

interface TabMenu {
  id: string;
  label: string;
  icon: string;
  items: HookahItem[];
}

// Данные о кальянах
const hookahMenuData: TabMenu[] = [
  {
    id: "fruity",
    label: "Фруктовые",
    icon: "Apple",
    items: [
      {
        id: 1,
        name: "Сочное яблоко",
        description: "Освежающий яблочный микс с нотками садовой свежести и мяты",
        price: 1500,
        isPopular: true,
        strength: 'Лёгкий'
      },
      {
        id: 2,
        name: "Тропический рай",
        description: "Сочетание манго, маракуйи и ананаса для истинных ценителей экзотики",
        price: 1600,
        strength: 'Средний'
      },
      {
        id: 3,
        name: "Цитрусовый фреш",
        description: "Насыщенный вкус апельсина и грейпфрута с освежающим послевкусием",
        price: 1550,
        strength: 'Лёгкий'
      },
      {
        id: 4,
        name: "Гранатовый всплеск",
        description: "Терпкий вкус граната с лёгкой кислинкой и фруктовыми нотками",
        price: 1700,
        isNew: true,
        strength: 'Средний'
      }
    ]
  },
  {
    id: "berry",
    label: "Ягодные",
    icon: "Cherry",
    items: [
      {
        id: 5,
        name: "Лесные ягоды",
        description: "Насыщенный микс из черники, ежевики и малины для настоящих гурманов",
        price: 1600,
        isPopular: true,
        strength: 'Лёгкий'
      },
      {
        id: 6,
        name: "Клубничный десерт",
        description: "Сладкий вкус сочной клубники со сливочным послевкусием",
        price: 1550,
        strength: 'Лёгкий'
      },
      {
        id: 7,
        name: "Вишнёвый сад",
        description: "Яркий вкус спелой вишни с лёгкой кислинкой и насыщенным ароматом",
        price: 1650,
        strength: 'Средний'
      }
    ]
  },
  {
    id: "dessert",
    label: "Десертные",
    icon: "IceCream",
    items: [
      {
        id: 8,
        name: "Сливочная карамель",
        description: "Мягкий сливочный вкус с нотками тёплой карамели и ванили",
        price: 1600,
        strength: 'Лёгкий'
      },
      {
        id: 9,
        name: "Шоколадное искушение",
        description: "Насыщенный вкус тёмного шоколада с лёгкими оттенками кофе",
        price: 1700,
        isPopular: true,
        strength: 'Средний'
      },
      {
        id: 10,
        name: "Тирамису",
        description: "Вкус классического итальянского десерта с кофейно-сливочными нотками",
        price: 1800,
        isNew: true,
        strength: 'Средний'
      }
    ]
  },
  {
    id: "special",
    label: "Авторские",
    icon: "Star",
    items: [
      {
        id: 11,
        name: "Дымный джек",
        description: "Уникальный микс с нотками виски, дуба и лёгкой сладостью",
        price: 2000,
        isPopular: true,
        strength: 'Крепкий'
      },
      {
        id: 12,
        name: "Восточная сказка",
        description: "Комбинация восточных пряностей, цветочного мёда и экзотических фруктов",
        price: 1900,
        strength: 'Средний'
      },
      {
        id: 13,
        name: "Морской бриз",
        description: "Освежающее сочетание цитрусовых и ментола с эффектом прохлады",
        price: 1800,
        strength: 'Лёгкий'
      }
    ]
  }
];

// Индикатор крепости
const StrengthIndicator: React.FC<{ strength: string }> = ({ strength }) => {
  let color = "";
  let bars = 0;
  
  switch(strength) {
    case "Лёгкий":
      color = "bg-green-500";
      bars = 1;
      break;
    case "Средний":
      color = "bg-yellow-500";
      bars = 2;
      break;
    case "Крепкий":
      color = "bg-red-500";
      bars = 3;
      break;
    default:
      color = "bg-gray-300";
      bars = 0;
  }
  
  return (
    <div className="flex items-center gap-1.5">
      <div className={`h-2 w-2 rounded-full ${color}`}></div>
      <div className={`h-2 w-2 rounded-full ${bars >= 2 ? color : 'bg-gray-300'}`}></div>
      <div className={`h-2 w-2 rounded-full ${bars >= 3 ? color : 'bg-gray-300'}`}></div>
      <span className="text-xs text-muted-foreground ml-1">{strength}</span>
    </div>
  );
};

// Основной компонент меню кальянов
const HookahMenu: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-hookah-dark to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Меню кальянов</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Широкий выбор ароматов от классики до авторских миксов, 
            приготовленных нашими опытными кальянными мастерами
          </p>
        </div>
        
        <Tabs defaultValue="fruity" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-hookah-dark/50 p-1">
              {hookahMenuData.map((tab) => (
                <TabsTrigger 
                  key={tab.id} 
                  value={tab.id}
                  className="data-[state=active]:bg-hookah-purple data-[state=active]:text-white"
                >
                  <Icon name={tab.icon} className="mr-2" size={16} />
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {hookahMenuData.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tab.items.map((item) => (
                  <Card key={item.id} className="bg-card backdrop-blur-sm border-hookah-purple/20 hookah-shadow overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">
                          {item.name}
                        </CardTitle>
                        <div>
                          {item.isPopular && <Badge className="bg-hookah-purple mr-2">Популярное</Badge>}
                          {item.isNew && <Badge className="bg-emerald-500">Новинка</Badge>}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <StrengthIndicator strength={item.strength} />
                        <span className="font-semibold text-lg">{item.price} ₽</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{item.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default HookahMenu;
