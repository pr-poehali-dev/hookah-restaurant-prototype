
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Отслеживание скролла для изменения стиля хедера
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-hookah-dark/95 py-2 shadow-lg' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <Link to="/" className="flex items-center">
            <span className="text-white font-montserrat font-bold text-2xl">
              HOOKAH<span className="text-hookah-purple">LOUNGE</span>
            </span>
          </Link>

          {/* Навигация для десктопа */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Главная</NavLink>
            <NavLink href="/menu">Меню</NavLink>
            <NavLink href="/gallery">Галерея</NavLink>
            <NavLink href="/about">О нас</NavLink>
            <NavLink href="/contacts">Контакты</NavLink>
          </nav>

          {/* Кнопка и иконка телефона */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+78001234567" className="text-white flex items-center hover:text-hookah-purple transition-colors">
              <Icon name="Phone" className="mr-2" size={18} />
              <span>8 (800) 123-45-67</span>
            </a>
            <Button className="bg-hookah-purple hover:bg-hookah-purple/90">
              Бронь
            </Button>
          </div>

          {/* Мобильное меню - кнопка */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Мобильное меню - содержимое */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <MobileNavLink href="/">Главная</MobileNavLink>
              <MobileNavLink href="/menu">Меню</MobileNavLink>
              <MobileNavLink href="/gallery">Галерея</MobileNavLink>
              <MobileNavLink href="/about">О нас</MobileNavLink>
              <MobileNavLink href="/contacts">Контакты</MobileNavLink>
            </nav>
            <div className="mt-4 flex flex-col space-y-3">
              <a href="tel:+78001234567" className="text-white flex items-center justify-center py-2 hover:bg-hookah-purple/20 rounded-md transition-colors">
                <Icon name="Phone" className="mr-2" size={18} />
                <span>8 (800) 123-45-67</span>
              </a>
              <Button className="bg-hookah-purple hover:bg-hookah-purple/90 w-full">
                Забронировать
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Компоненты навигационных ссылок
const NavLink: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
  <Link 
    to={href} 
    className="text-white hover:text-hookah-purple transition-colors font-medium"
  >
    {children}
  </Link>
);

const MobileNavLink: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
  <Link 
    to={href} 
    className="text-white hover:text-hookah-purple transition-colors font-medium py-2 px-3 block hover:bg-hookah-purple/20 rounded-md"
  >
    {children}
  </Link>
);

export default Header;
