
import React from 'react';
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

const ContactCta: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-hookah-dark to-hookah-purple/80 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden hookah-shadow">
          {/* Декоративные элементы */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          </div>
          
          <div className="relative z-10 text-center md:w-3/4 mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Забронируйте столик прямо сейчас</h2>
            <p className="text-white/80 mb-8 md:text-lg">
              Насладитесь изысканными кальянами и уникальной атмосферой нашего ресторана.
              Забронируйте столик и подарите себе незабываемый вечер.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-hookah-purple hover:bg-white/90"
              >
                Забронировать столик
                <Icon name="CalendarDays" className="ml-2" size={18} />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                <Icon name="Phone" className="mr-2" size={18} />
                Позвонить нам
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;
