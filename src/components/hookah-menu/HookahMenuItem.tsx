
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HookahItemProps } from './types';
import StrengthIndicator from './StrengthIndicator';

const HookahMenuItem: React.FC<HookahItemProps> = ({ 
  name, 
  description, 
  price, 
  isPopular, 
  isNew, 
  strength 
}) => {
  return (
    <Card className="bg-card backdrop-blur-sm border-hookah-purple/20 hookah-shadow overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">
            {name}
          </CardTitle>
          <div>
            {isPopular && <Badge className="bg-hookah-purple mr-2">Популярное</Badge>}
            {isNew && <Badge className="bg-emerald-500">Новинка</Badge>}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <StrengthIndicator strength={strength} />
          <span className="font-semibold text-lg">{price} ₽</span>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default HookahMenuItem;
