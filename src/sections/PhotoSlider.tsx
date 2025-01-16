'use client';

import React from 'react';
import Image from 'next/image';
import photo1 from "@/assets/sliderPhotos/random_1.jpg";
import photo2 from "@/assets/sliderPhotos/random_2.jpg";
import photo3 from "@/assets/sliderPhotos/random_3.jpg";
import photo4 from "@/assets/sliderPhotos/random_4.png";
import photo5 from "@/assets/sliderPhotos/random_5.jpg";
import photo6 from "@/assets/sliderPhotos/random_6.jpg";
import { motion } from 'framer-motion';
import './Hero.css';

const PhotoSlider = () => {
    const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

    return (
        <section className='py-20 md:py-24'>
            <div className='relative container'>
                <div className='flex flex-1 overflow-hidden rounded-3xl relative'>
                    {/* Gradient overlays for slider edges */}
                    <div className='absolute inset-y-0 left-0 w-1/3 -ml-10 bg-gradient-to-r from-[#7042f861] to-transparent z-20 pointer-events-none'></div>
                    <div className='absolute inset-y-0 right-0 w-1/3 -mr-10 bg-gradient-to-l from-[#7042f861] to-transparent z-20 pointer-events-none'></div>

                    {/* Animated sliding div */}
                    <motion.div
                        initial={{ x: 0 }} 
                        animate={{ x: '-100%' }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear"
                        }}
                        className='flex flex-none gap-8 md:gap-12'
                    >

                        {[...photos, ...photos].map((photo, index) => (
                            <div key={index} className="slider-image-container">
                                <div className="absolute inset-0 bg-black opacity-30 z-10 rounded-3xl"></div>
                                <Image
                                    src={photo}
                                    alt={`Slider image ${index + 1}`}
                                    width={340} // Increased width
                                    height={200} // Increased height
                                    className='object-cover rounded-3xl'
                                    unoptimized
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PhotoSlider;









