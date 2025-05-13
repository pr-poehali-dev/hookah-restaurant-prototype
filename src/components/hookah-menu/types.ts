
export interface HookahItemProps {
  id: number;
  name: string;
  description: string;
  price: number;
  isPopular?: boolean;
  isNew?: boolean;
  strength: 'Лёгкий' | 'Средний' | 'Крепкий';
}

export interface TabMenuProps {
  id: string;
  label: string;
  icon: string;
  items: HookahItemProps[];
}
