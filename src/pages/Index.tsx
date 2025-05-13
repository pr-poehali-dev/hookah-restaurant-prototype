
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HookahMenu from '@/components/HookahMenu';
import GallerySection from '@/components/GallerySection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <HookahMenu />
        <GallerySection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
