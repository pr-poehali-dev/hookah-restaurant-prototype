
import { TabMenuProps } from './types';

export const hookahMenuData: TabMenuProps[] = [
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
