
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Icon from '@/components/ui/icon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-hookah-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Колонка 1: О нас */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-montserrat">
              HOOKAH<span className="text-hookah-purple">LOUNGE</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Премиальный кальянный ресторан, где искусство кальяна соединяется с изысканной кухней и атмосферой.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon="Instagram" />
              <SocialLink href="#" icon="Facebook" />
              <SocialLink href="#" icon="Telegram" />
              <SocialLink href="#" icon="Youtube" />
            </div>
          </div>
          
          {/* Колонка 2: Навигация */}
          <div>
            <h3 className="text-lg font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <FooterLink href="/">Главная</FooterLink>
              <FooterLink href="/menu">Меню</FooterLink>
              <FooterLink href="/gallery">Галерея</FooterLink>
              <FooterLink href="/about">О нас</FooterLink>
              <FooterLink href="/contacts">Контакты</FooterLink>
            </ul>
          </div>
          
          {/* Колонка 3: Контакты */}
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Icon name="MapPin" className="mr-2 mt-1 text-hookah-purple" size={16} />
                <span className="text-gray-300">г. Москва, ул. Примерная, 123</span>
              </li>
              <li className="flex items-center">
                <Icon name="Phone" className="mr-2 text-hookah-purple" size={16} />
                <a href="tel:+78001234567" className="text-gray-300 hover:text-white">
                  8 (800) 123-45-67
                </a>
              </li>
              <li className="flex items-center">
                <Icon name="Mail" className="mr-2 text-hookah-purple" size={16} />
                <a href="mailto:info@hookahlounge.ru" className="text-gray-300 hover:text-white">
                  info@hookahlounge.ru
                </a>
              </li>
              <li className="flex items-center">
                <Icon name="Clock" className="mr-2 text-hookah-purple" size={16} />
                <span className="text-gray-300">Ежедневно с 14:00 до 02:00</span>
              </li>
            </ul>
          </div>
          
          {/* Колонка 4: Подписка */}
          <div>
            <h3 className="text-lg font-bold mb-4">Подписаться на новости</h3>
            <p className="text-gray-300 mb-4">Получайте информацию о специальных предложениях и мероприятиях</p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Ваш email" 
                className="bg-hookah-dark border-hookah-purple/50 focus:border-hookah-purple text-white"
              />
              <Button className="bg-hookah-purple hover:bg-hookah-purple/90">
                <Icon name="Send" size={16} />
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="bg-hookah-purple/20 my-6" />
        
        {/* Нижний колонтитул */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div>© 2025 HookahLounge. Все права защищены.</div>
          <div className="flex mt-4 md:mt-0">
            <Link to="/policy" className="hover:text-white mr-4">Политика конфиденциальности</Link>
            <Link to="/terms" className="hover:text-white">Условия использования</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Компоненты для ссылок
const SocialLink: React.FC<{ href: string, icon: string }> = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="bg-hookah-dark/80 hover:bg-hookah-purple transition-colors w-8 h-8 flex items-center justify-center rounded-full"
  >
    <Icon name={icon} size={16} />
  </a>
);

const FooterLink: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
  <li>
    <Link to={href} className="text-gray-300 hover:text-white hover:underline transition-colors">
      {children}
    </Link>
  </li>
);

export default Footer;
