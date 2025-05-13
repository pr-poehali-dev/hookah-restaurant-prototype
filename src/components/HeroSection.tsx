
import React from 'react';
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[700px] flex items-center overflow-hidden">
      {/* Фоновое изображение */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1559592232-13fee833e33b?q=80&w=1974&auto=format&fit=crop")', 
          filter: 'brightness(0.4)'
        }}
      />
      
      {/* Эффект дыма */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <div className="smoke-effect w-20 h-20 bg-hookah-smoke/30 rounded-full blur-xl left-1/4 top-1/3"></div>
        <div className="smoke-effect w-24 h-24 bg-hookah-smoke/20 rounded-full blur-xl left-1/2 top-1/4"></div>
        <div className="smoke-effect w-16 h-16 bg-hookah-smoke/25 rounded-full blur-xl left-3/4 top-2/3"></div>
      </div>
      
      {/* Контент */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-montserrat">
            ОБЛАКО <span className="text-hookah-purple">НАСЛАЖДЕНИЯ</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
            Уникальная атмосфера кальянного ресторана, где сочетаются изысканная кухня, 
            премиальные кальяны и искусство отдыха
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-hookah-purple hover:bg-hookah-purple/90 text-white font-medium"
            >
              Забронировать стол
              <Icon name="CalendarDays" className="ml-2" size={18} />
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="border-white text-white hover:bg-white/10"
            >
              Наше меню
              <Icon name="Menu" className="ml-2" size={18} />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Градиентное наложение снизу для плавного перехода */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-hookah-dark to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;
