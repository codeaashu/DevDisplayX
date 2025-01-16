'use client';

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { EVENTS } from '../constants';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Events: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
    appendDots: (dots: React.ReactNode) => (
      <div className="absolute -bottom-10 w-full flex justify-center items-center">
        <ul className="m-0 p-0">{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        className={`
          w-3 h-3 mx-1 rounded-full transition-all duration-300 ease-in-out
          ${i === currentSlide ? 'bg-purple-600 opacity-100' : 'bg-purple-400 opacity-50'}
        `}
      />
    ),
  };

  const imageSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section id="past-events" className="relative flex flex-col items-center justify-center min-h-screen text-white overflow-hidden py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(112,66,248,0.1)_0%,transparent_70%)] opacity-10"></div>
      <h2 className="text-3xl font-bold mb-12 text-white z-10" data-aos="fade-up">Our Past Events</h2>
      <div className="w-full max-w-6xl px-4 z-10">
        <div className="relative border border-white/10 rounded-2xl p-8 bg-[#0a0016]/10 backdrop-blur-sm mb-16">
          <Slider {...settings} className="events-slider">
            {EVENTS.map((event, index) => (
              <div key={index} className="px-4" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                <div className="rounded-lg p-6 bg-[#000000] shadow-[0_0_10px_rgba(112,66,248,0.3),0_0_20px_rgba(149,99,255,0.2)]">
                  {isMobile ? (
                    <Slider {...imageSliderSettings} className="mb-6">
                      {[event.eventImage1, event.eventImage2, event.eventImage3].map((img, imgIndex) => (
                        <div key={imgIndex} className="relative aspect-video">
                          <Image
                            src={img || "https://via.placeholder.com/300"}
                            alt={`${event.eventName} image ${imgIndex + 1}`}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                          />
                        </div>
                      ))}
                    </Slider>
                  ) : (
                    <div className="flex justify-between mb-6 space-x-4">
                      {[event.eventImage1, event.eventImage2, event.eventImage3].map((img, imgIndex) => (
                        <div key={imgIndex} className="relative w-1/3 aspect-video">
                          <Image
                            src={img || "https://via.placeholder.com/300"}
                            alt={`${event.eventName} image ${imgIndex + 1}`}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  <h3 className="text-2xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                    {event.eventName}
                  </h3>
                  <p className="text-gray-400 mb-3">{event.eventDate}</p>
                  <p className="text-gray-300">{event.eventDescription}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Events;
