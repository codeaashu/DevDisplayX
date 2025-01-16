import React, { useEffect } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

import logoImage from '@/assets/logos/white_logo.png';

const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,    
        });
    }, []);

    return (
        <div id="contact-us" className="relative" data-aos="fade-up" data-aos-offset="200">
            <div className="w-full h-[2px] bg-gradient-to-r from-[#7042f8] to-[#00c6ff] shadow-lg mb-5" data-aos="fade-down" data-aos-duration="1500"></div>

            <div className="w-full bg-[#03001417] text-gray-300 py-6 backdrop-blur-md shadow-inner shadow-[#2A0E61]/50">
                <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm">
                    {/* Contact Information */}
                    <div className="mb-8 md:mb-0" data-aos="fade-right">
                        <Image
                            src={logoImage} 
                            alt="IEEE Logo"
                            width={120}
                            height={120}
                            className="mb-4 mx-auto md:mx-0"
                        />
                        <h3 className="font-bold mb-2">Get In Touch</h3>
                        <p className="mb-2">Indira Gandhi Delhi Technical University for Women, New Church Rd, Opp. St James Church, Kashmere Gate, Delhi 110006</p>
                        <p className="mb-2">Phone: No.</p>
                        <p className="mb-2">Email: <a href="mailto:igdtuieee@gmail.com" className="underline">igdtuieee@gmail.com</a></p>
                    </div>

                    {/* Navigation Links */}
                    <div className="mb-8 md:mb-0" data-aos="fade-up">
                        <h3 className="font-bold mb-2">Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#about" className="hover:text-[#7042f8] transition-colors">About Us</a></li>
                            <li><a href="#events" className="hover:text-[#7042f8] transition-colors">Events</a></li>
                            <li><a href="#team" className="hover:text-[#7042f8] transition-colors">Team</a></li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div className="mb-8 md:mb-0" data-aos="fade-left">
                        <h3 className="font-bold mb-2">Follow Us</h3>
                        <div className="flex justify-center sm:justify-start space-x-4">
                            <a href="#facebook" className="text-white hover:text-[#3b5998] transition-colors">
                                <FaFacebookF size={20} />
                            </a>
                            <a href="#instagram" className="text-white hover:text-[#e4405f] transition-colors">
                                <FaInstagram size={20} />
                            </a>
                            <a href="#twitter" className="text-white hover:text-[#1da1f2] transition-colors">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#linkedin" className="text-white hover:text-[#0077b5] transition-colors">
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>
                <br /><br />
                <div style={{ textAlign: 'center' }}>
                    <p>This website is developed with <span style={{ color: '#7042f8' }}>❤️</span> by IEEE Web Admin. Team</p>
                    <p> &copy; IEEE IGDTUW 2024 | All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
