
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

// Особенности заведения
const features = [
  {
    icon: "Star",
    title: "Премиум кальяны",
    description: "Используем только лучшие кальяны и топовые табаки для максимального удовольствия"
  },
  {
    icon: "Utensils",
    title: "Авторская кухня",
    description: "Изысканные блюда от нашего шеф-повара прекрасно сочетаются с любым кальяном"
  },
  {
    icon: "Music",
    title: "Атмосферная музыка",
    description: "Тщательно подобранная музыка создаёт идеальное настроение для отдыха"
  },
  {
    icon: "Users",
    title: "Профессиональная команда",
    description: "Опытные кальянные мастера и внимательный персонал заботятся о вашем комфорте"
  }
];

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-hookah-dark/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Фото и описание */}
          <div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1519175182487-uncefeb3d229?q=80&w=2070&auto=format&fit=crop" 
                alt="О нашем ресторане" 
                className="rounded-lg shadow-xl w-full object-cover h-[400px]"
              />
              
              {/* Декоративный элемент */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-hookah-purple rounded-lg opacity-20 z-0"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-hookah-purple rounded-lg opacity-10 z-0"></div>
            </div>
          </div>
          
          {/* Текстовое описание */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">О нашем кальянном ресторане</h2>
            <p className="text-lg mb-6 text-muted-foreground">
              Наш ресторан объединяет традиции восточного кальянного искусства и современные тенденции. 
              Мы создали место, где можно насладиться премиальным кальяном в атмосфере комфорта и расслабления.
            </p>
            <p className="text-lg mb-8 text-muted-foreground">
              За 5 лет работы мы стали одним из самых популярных мест в городе благодаря особому подходу
              к качеству кальянов, обслуживанию и созданию неповторимой атмосферы.
            </p>
            
            {/* Статистика */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-hookah-purple">5+</div>
                <div className="text-sm text-muted-foreground">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-hookah-purple">30+</div>
                <div className="text-sm text-muted-foreground">Видов табака</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-hookah-purple">10k+</div>
                <div className="text-sm text-muted-foreground">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-hookah-purple">4.9</div>
                <div className="text-sm text-muted-foreground">Рейтинг</div>
              </div>
            </div>
          </div>
        </div>

        {/* Карточки с преимуществами */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card backdrop-blur-sm border-hookah-purple/20 hookah-shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="bg-hookah-purple/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Icon name={feature.icon} className="text-hookah-purple" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
