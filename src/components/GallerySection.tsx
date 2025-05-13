
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Данные для галереи
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1507901747481-84a4f64fda6d?q=80&w=2070&auto=format&fit=crop",
    alt: "Стильный интерьер кальянной"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1532635241-17e820acc59f?q=80&w=2015&auto=format&fit=crop",
    alt: "Приготовление кальяна"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1563291589-4e9a1757428d?q=80&w=2070&auto=format&fit=crop",
    alt: "Кальянная зона отдыха"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?q=80&w=2070&auto=format&fit=crop",
    alt: "Вечерняя атмосфера в ресторане"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1517456215183-9a2c3a748f6c?q=80&w=2070&auto=format&fit=crop",
    alt: "Уютный интерьер"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1599056407101-7c557a4a0144?q=80&w=1974&auto=format&fit=crop",
    alt: "Дымный кальян"
  }
];

const GallerySection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Атмосфера нашего заведения</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Погрузитесь в уникальную атмосферу нашего кальянного ресторана, 
            где каждая деталь создана для вашего комфорта
          </p>
        </div>
        
        <div className="mx-auto max-w-5xl">
          <Carousel
            opts={{
              align: "start",
              loop: true
            }}
            className="relative"
          >
            <CarouselContent>
              {galleryImages.map((image) => (
                <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3 px-2">
                  <div className="bg-card rounded-lg overflow-hidden border border-hookah-purple/20 hookah-shadow hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <AspectRatio ratio={3/4}>
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-hookah-purple/90 text-white hover:bg-hookah-purple border-none" />
            <CarouselNext className="right-2 bg-hookah-purple/90 text-white hover:bg-hookah-purple border-none" />
          </Carousel>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {galleryImages.slice(0, 4).map((image) => (
            <div key={image.id} className="rounded-lg overflow-hidden border border-hookah-purple/20 hookah-shadow hover:shadow-lg transition-all duration-300 hover:scale-105">
              <AspectRatio ratio={1/1}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
