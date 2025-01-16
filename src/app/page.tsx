'use client';
import React, { useEffect } from 'react';
import Header from "@/sections/Header";
import Footer from '@/sections/Footer';
import Hero from '@/sections/Hero';
import Faq from '@/sections/Faq';
import PhotoSlider from '@/sections/PhotoSlider';
import AboutSb from '@/sections/AboutSb';
import Team from '@/sections/Team';
import AimAndMission from '@/sections/AimAndMission';
import Events from '@/sections/Events';

const Home = () => {
  useEffect(() => {
    const crsr = document.getElementById("cursor");
    const blur = document.getElementById("cursor-blur");

    const throttle = <T extends unknown[]>(func: (...args: T) => void, limit: number) => {
      let lastFunc: ReturnType<typeof setTimeout>;
      let lastRan: number;

      return (...args: T) => {
        if (!lastRan) {
          func(...args);
          lastRan = Date.now();
        } else {
          clearTimeout(lastFunc);
          lastFunc = setTimeout(() => {
            if (Date.now() - lastRan >= limit) {
              func(...args);
              lastRan = Date.now();
            }
          }, limit - (Date.now() - lastRan));
        }
      };
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (crsr && blur) {
        crsr.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
        blur.style.transform = `translate(${event.clientX - 150}px, ${event.clientY - 150}px)`;
      }
    };


    const throttledMouseMove = throttle(handleMouseMove, 50);

    document.addEventListener("mousemove", throttledMouseMove);

    return () => {
      document.removeEventListener("mousemove", throttledMouseMove);
    };
  }, []);

  return (
    <>
      <div id="cursor"></div>
      <div id="cursor-blur"></div>

      <Header />
      <Hero />
      <PhotoSlider />
      <AboutSb />
      <AimAndMission />
      <Events />
      <Team />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
