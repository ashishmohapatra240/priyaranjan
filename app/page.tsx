'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from './components/Header';
import { AnimatedLink } from './components/AnimatedLink';
import Link from 'next/link';

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
                  <h1 className="text-base md:text-md font-light leading-tight">
                    Hi, I’m Priyaranjan, and I’m lazy.
                    <br />
                    Like most creatives, I can build bold brands, craft killer strategies, and fight 12 feedback rounds with grace... but designing my own portfolio? That’s where I draw the line.
                    <br />
                    <br />
                    This website is still under construction, because I’m either too busy, too tired, or just lying flat on the floor staring at my ceiling fan.
                    <br />
                    <br />
                    One day, it’ll be great. Today’s not that day.
                    But hey, you came all this way, so thanks for that.
                  </h1>
                </div>
              ) : (
                <div className="space-y-4">
                  <h1 className="text-base md:text-md font-light leading-tight">
                    Hi, I’m Priyaranjan.
                    <br />
                    I’m a creative director and brand strategist with over a decade of experience helping brands find clarity, purpose, and visual identity.
                    <br />
                    I’ve worked across industries, led campaigns, built systems, and crafted stories that connect, always driven by clarity, culture, and intention.
                    <br />
                    <br />
                    This website is still under construction. I’m taking my time, not because I have to, but because I want this to reflect the same depth and thought I put into every brand I work on.
                    <br />
                    Thanks for stopping by. Something meaningful is on the way.


                  </h1>
                </div>
              )}

              <div className="flex items-center space-x-2 mt-6">
                <div className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-white' : 'bg-black'
                  }`}></div>
                <Link href="https://drive.google.com/drive/folders/1DoeQXkfGvs7P0LSOHxl8h6E1bodZiwIf?usp=share_link" target="_blank" rel="noopener noreferrer" className="text-base md:text-md font-medium leading-tight hover:underline transition-all duration-200 cursor-pointer">
                  See My Works
                </Link>
              </div>
              <div className="mt-20">
                <div className="flex space-x-4 text-xs md:text-sm">


                  {isDarkMode ? (
                    <AnimatedLink
                      href="https://www.instagram.com/priyaranjan.design/"
                      className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                      frontText="GoodPhotos"
                      backText="Instagram"
                    />
                  ) : <AnimatedLink
                    href="https://www.instagram.com/priyaranjan.design/"
                    className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                    frontText="Instagram"
                    backText="Instagram"
                  />
                  }

                  {isDarkMode ? (
                    <AnimatedLink
                      href="https://www.linkedin.com/in/bypriyaranjan/"
                      className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                      frontText="BuzzwordHQ"
                      backText="LinkedIn"
                    />
                  ) : <AnimatedLink
                    href="https://www.linkedin.com/in/bypriyaranjan/"
                    className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                    frontText="LinkedIn"
                    backText="LinkedIn"
                  />
                  }

                  {
                    isDarkMode ? (
                      <AnimatedLink
                        href="https://wa.me/919124999144"
                        className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                        frontText="Text Maybe"
                        backText="WhatsApp"
                      />
                    ) : (
                      <AnimatedLink
                        href="https://wa.me/919124999144"
                        className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                        frontText="WhatsApp"
                        backText="WhatsApp"
                      />
                    )
                  }

                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image
                  src={isDarkMode ? "/images/hero-dark.png" : "/images/hero-light.png"}
                  alt="Priyaranjan portrait"
                  height={480}
                  width={480}
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
