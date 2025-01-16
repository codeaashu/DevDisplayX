'use client';

import React, { useState, useRef, useEffect } from "react";
import { FAQDATA } from "../constants";
import './1.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface FAQItem {
    question: string;
    answer: string;
}

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const contentRefs = useRef<Array<HTMLDivElement | null>>([]);
    const faqSectionRef = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        AOS.init({ duration: 1000 });

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        const section = faqSectionRef.current;
        if (section) {
            observer.observe(section);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={faqSectionRef} className="bg-black text-white py-12 px-4 sm:px-6 lg:px-10">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-extrabold text-center text-white mb-8 animate-typewriter">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-6">
                    {FAQDATA.map((faq: FAQItem, index: number) => (
                        <div
                            key={index}
                            className={`bg-[#000000] shadow-lg rounded-lg overflow-hidden border-2 border-[#616161] 
                                transition-transform duration-500 ease-out`}
                            data-aos="fade-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div
                                className="flex justify-between items-center p-5 cursor-pointer hover:bg-[#2a2a2e] transition-all duration-300"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h3 className="text-lg font-semibold text-white">
                                    {faq.question}
                                </h3>
                                <span
                                    className={`text-[#969292] text-xl transform transition-transform duration-300 
                                        ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}
                                >
                                    ▼
                                </span>
                            </div>

                            <div
                                ref={(el) => {
                                    contentRefs.current[index] = el;
                                }}
                                className={`overflow-hidden bg-[#000000] transition-all duration-500 ease-in-out 
                                    ${openIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
                                style={{
                                    maxHeight: openIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0',
                                }}
                            >
                                <div className="p-5">
                                    <p className="text-[#d1d1d1]">{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
