'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ABOUTSB, CHAPTERS } from '@/constants';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutSb = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <section id="about" className='py-20 md:py-24 min-h-screen flex items-center'>
            <div className='container'>
                <motion.div
                    className="border border-white/15 py-24 rounded-xl overflow-hidden relative"
                    style={{
                        background: 'radial-gradient(circle at center, rgba(88, 28, 135, 0.15), rgba(15, 7, 25, 1) 85%)',
                        boxShadow: `
                            inset 0 0 100px rgba(139, 92, 246, 0.1),
                            0 0 40px rgba(88, 28, 135, 0.2)
                        `
                    }}
                    initial="hidden"
                    animate="visible"
                >
                    <div className='relative z-10 px-6 md:px-12'>
                        <motion.h2
                            className='text-5xl md:text-6xl max-w-3xl mx-auto tracking-tighter text-center font-bold mb-16'
                            data-aos="fade-up"
                        >
                            Unveiling Our Student Branch & Chapter
                        </motion.h2>

                        {/* IEEE Student Branch Section */}
                        <motion.div
                            className='flex flex-col md:flex-row items-center mb-24'
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <motion.div className='md:w-1/3 mb-8 md:mb-0' data-aos="fade-right">
                                <Image src={ABOUTSB[0].sbImage} alt="IEEE Logo" width={200} height={200} className="mx-auto" />
                            </motion.div>
                            <motion.div className='md:w-2/3 md:pl-8' data-aos="fade-left">
                                <h3 className='text-4xl font-semibold mb-4 text-[#9563ff]'>IEEE IGDTUW Student Branch</h3>
                                <p className='italic text-xl mb-4 text-white text-justify'>{ABOUTSB[0].sbMission}</p>
                                <ul className='list-disc pl-6 text-lg text-gray-300 text-justify'>
                                    {ABOUTSB[0].sbDetails.map((detail, index) => (
                                        <li key={index}>{detail}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.div>

                        {/* WIE Chapter Section */}
                        <motion.div
                            className='flex flex-col md:flex-row-reverse items-center'
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <motion.div className='md:w-1/3 mb-8 md:mb-0' data-aos="fade-left">
                                <Image src={CHAPTERS[0].chapterLogo} alt="WIE Logo" width={200} height={200} className="mx-auto" />
                            </motion.div>
                            <motion.div className='md:w-2/3 md:pr-8 text-right' data-aos="fade-right">
                                <h3 className='text-4xl font-semibold mb-4 text-[#9563ff]'>{CHAPTERS[0].chapterName}</h3>
                                <ul className='list-disc pl-6 text-lg text-gray-300 text-justify'>
                                    {CHAPTERS[0].chapterDetails.map((detail, index) => (
                                        <li key={index}>{detail}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSb;