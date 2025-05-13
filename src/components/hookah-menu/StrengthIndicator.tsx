
import React from 'react';

interface StrengthIndicatorProps {
  strength: 'Лёгкий' | 'Средний' | 'Крепкий';
}

const StrengthIndicator: React.FC<StrengthIndicatorProps> = ({ strength }) => {
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

export default StrengthIndicator;
