'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from './components/Header';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`h-screen transition-colors duration-300 flex flex-col ${isDarkMode
      ? 'bg-black text-white'
      : 'bg-white text-gray-900'
      }`}>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <main className="px-6 md:px-12 py-2 md:py-4 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col-reverse md:flex-row gap-6 lg:gap-12 items-center justify-center">
            <div className="space-y-4 max-w-lg">
              {isDarkMode ? (
                <div className="space-y-2">
                  <h1 className="text-base md:text-lg font-light leading-tight">
                    Hi,
                    I am Priyaranjan and I am lazy af.

                    I&apos;ve poured my soul into building brands, campaigns, and
                    designs for others... but when it comes to designing my
                    own portfolio?

                    But don&apos;t worry, I&apos;ll get there. Probably. Eventually.
                    Maybe.
                  </h1>
                </div>
              ) : (
                <div className="space-y-4">
                  <h1 className="text-base md:text-lg font-light leading-tight">
                    Hi, welcome to my portfolio. I&apos;m a hands-on Digital Creative Director
                    focused on crafting innovative digital experiences. Dive in to explore my
                    work, my process, and how I bring ideas to life through collaboration and
                    creativity.
                  </h1>
                </div>
              )}

              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-white' : 'bg-black'
                  }`}></div>
                <button className="text-base md:text-lg font-medium leading-tight hover:underline transition-all duration-200 cursor-pointer">
                  See My Works
                </button>
              </div>
              <div className="mt-20">
                <div className="flex space-x-4 text-xs md:text-sm text-gray-500">
                  <a href="http://instagram.com/priyaranjan.design/" className="hover:text-current transition-colors">
                    Instagram
                  </a>
                  <a href="https://www.linkedin.com/in/bypriyaranjan/" className="hover:text-current transition-colors">
                    LinkedIn
                  </a>
                  <a href="https://wa.me/919124999144" className="hover:text-current transition-colors">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image
                  src={isDarkMode ? "/images/hero-dark.png" : "/images/hero-light.png"}
                  alt="Priyaranjan portrait"
                  height={400}
                  width={400}
                  className="max-w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>


        </div>
      </main>
    </div>
  );
}
