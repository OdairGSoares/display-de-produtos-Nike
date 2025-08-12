'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
import { shoesData } from '@/data/shoesData';
import Link from 'next/link';

// Dynamic imports
const AddToCartButton = dynamic(() => import("@/components/addToCartButton"), { ssr: false });
const ColorPicker = dynamic(() => import("@/components/colorPicker"), { ssr: false });
const Background = dynamic(() => import("@/components/background"), { ssr: false });
const Header = dynamic(() => import("@/components/header"), { ssr: false });
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });
import LoadingAnimation from "@/components/loadingAnimation";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [currentShoeIndex, setCurrentShoeIndex] = useState(0);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [showPromotionalContent, setShowPromotionalContent] = useState(false);

  useEffect(() => {
    const handleLoad = () => setIsLoaded(true);

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    const timers = [
      setTimeout(() => setShowFooter(true), 2000),
      setTimeout(() => setShowFooter(false), 4000),
      setTimeout(() => setShowColorPicker(true), 5000),
      setTimeout(() => setShowPromotionalContent(true), 2000)
    ];

    return () => timers.forEach(clearTimeout);
  }, [isLoaded]);

  const handleShoeChange = (newShoeIndex, newColorIndex = 0) => {
    setCurrentShoeIndex(newShoeIndex);
    setCurrentColorIndex(newColorIndex);
  };

  const handleColorChange = (newColorIndex) => {
    setCurrentColorIndex(newColorIndex);
  };

  const getCurrentShoeImage = () => {
    const currentShoe = shoesData[currentShoeIndex];
    const currentColor = currentShoe.colors[currentColorIndex];
    return currentColor.image;
  };

  const getCurrentShoeColor = () => {
    const currentShoe = shoesData[currentShoeIndex];
    const currentColor = currentShoe.colors[currentColorIndex];
    return getColorFromName(currentColor.name);
  };

  // Função para mapear nomes de cores para valores hex
  const getColorFromName = (colorName) => {
    const colorMap = {
      'Azul': '#0066CC',
      'Cinza e Preto': '#808080',
      'Marrom escuro e Marrom Claro': '#8B4513',
      'Preto e Cinza': '#404040',
      'Preto E Vermelho': '#CC0000',
      'Verde': '#228B22',
      'Amarelo e Cinza': '#FFD700',
      'Branco e Preto': '#FFFFFF',
      'Marrom e Cinza': '#A0522D',
      'Preto e Vermelho': '#CC0000',
      'Rosa': '#FF69B4',
      'Modelo 1': '#FF6B6B',
      'Modelo 2': '#4ECDC4',
      'Modelo 3': '#45B7D1',
      'Modelo 4': '#96CEB4',
      'Modelo 5': '#FFEAA7',
      'Modelo 6': '#DDA0DD'
    };

    return colorMap[colorName] || '#232d3f';
  };

  if (!isLoaded) {
    return <LoadingAnimation onLoadingComplete={() => setIsLoaded(true)} />;
  }

  return (
    <AnimatePresence>
      <motion.div
        className="overflow-hidden w-screen h-screen bg-[f5f5f5]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Background />

        <div className="fixed inset-0 -z-20">
          <Image
            src="/background.webp"
            alt="background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        <div className="z-10 h-screen flex flex-col">
          <Header />

          <main className="flex w-full h-full flex-col lg:flex-row">
            {/* Texto Principal */}
            <div className="flex w-full justify-center items-center px-4 sm:px-6 md:px-8 order-1 lg:order-1 lg:flex-1">
              <AnimatePresence mode="wait">
                {!showPromotionalContent ? (
                  <motion.h1
                    className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-black text-center italic leading-tight mt-8 lg:mt-0"
                    animate={{ lineHeight: [0, 2, 1], opacity: [0, 1, 1] }}
                    transition={{
                      duration: 1,
                      times: [0, 0.4, 1],
                      ease: "easeInOut"
                    }}
                  >
                    JUST<br />DO<br />IT
                  </motion.h1>
                ) : (
                  <motion.div
                    key={`promotional-content-${currentShoeIndex}`}
                    className="text-start max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl mx-auto px-2 mt-8 lg:mt-0"
                    initial={{ opacity: 0, x: '-100vw', scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                      staggerChildren: 0.2,
                      delayChildren: 0.1
                    }}
                  >
                    <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black mb-4 sm:mb-6 italic tracking-wider sm:tracking-widest leading-tight">
                      {shoesData[currentShoeIndex].title}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-black mb-6 sm:mb-8 leading-relaxed">
                      {shoesData[currentShoeIndex].description}
                    </p>
                    <motion.button
                      className="bg-[#232d3f] text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 tracking-wider sm:tracking-widest font-semibold text-base sm:text-lg uppercase hover:bg-[#1a1f2e] transition-colors duration-300 shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link href={`${shoesData[currentShoeIndex].link}`}>
                        {shoesData[currentShoeIndex].buttonText}
                      </Link>
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Área do Tênis */}
            <div className="w-full relative order-2 lg:order-2 lg:flex-1">
              {/* Elemento Triangular - Responsivo */}
              <motion.div
                key={`triangle-${currentShoeIndex}-${currentColorIndex}`}
                className=" invisible lg:visible border-l-[200px] sm:border-l-[400px] md:border-l-[600px] lg:border-l-[800px] xl:border-l-[1080px] border-l-transparent border-b-[180px] sm:border-b-[360px] md:border-b-[540px] lg:border-b-[720px] xl:border-b-[990px] absolute bottom-0 right-0"
                style={{ borderBottomColor: getCurrentShoeColor() }}
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              />

              {/* Imagem do Tênis - Responsiva */}
              <motion.div
              className='absolute bottom-1/4 invisible lg:visible'
                initial={{ x: "100vw", rotate: 340 }}
                animate={{ x: 0, rotate: 340 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                key={`${currentShoeIndex}-${currentColorIndex}`}
              >
                <Image
                  src={getCurrentShoeImage()}
                  alt={`${shoesData[currentShoeIndex].name} - ${shoesData[currentShoeIndex].colors[currentColorIndex].name}`}
                  width={700}
                  height={700}
                  className="custom-drop-shadow-xl w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[700px] xl:h-[700px] object-contain"
                />
              </motion.div>
            </div>

            {/* Versão Mobile do Tênis - Centralizada */}
            <div className="lg:hidden w-full flex justify-center items-center order-3 mt-8 mb-16">
              <motion.div
                key={`mobile-shoe-${currentShoeIndex}-${currentColorIndex}`}
                className="relative"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
              >
                <Image
                  src={getCurrentShoeImage()}
                  alt={`${shoesData[currentShoeIndex].name} - ${shoesData[currentShoeIndex].colors[currentColorIndex].name}`}
                  width={300}
                  height={300}
                  className="custom-drop-shadow-xl w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] object-contain"
                />
              </motion.div>
            </div>
          </main>

          {/* Animações dos Componentes Inferiores */}
          <AnimatePresence>
            {showFooter && (
              <motion.div
                className="absolute bottom-0 left-0 right-0"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <Footer />
              </motion.div>
            )}
          </AnimatePresence>

          {showColorPicker && (
            <>
              <ColorPicker
                currentShoeIndex={currentShoeIndex}
                currentColorIndex={currentColorIndex}
                onShoeChange={handleShoeChange}
                onColorChange={handleColorChange}
                shoesData={shoesData}
                getColorFromName={getColorFromName}
              />

              <motion.div
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <AddToCartButton />
              </motion.div>
            </>
          )}

        </div>
      </motion.div>
    </AnimatePresence>
  );
}
