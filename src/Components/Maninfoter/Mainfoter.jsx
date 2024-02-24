import React from 'react';
import Foterloggo from '../../../public/faby.png'
import { FiFacebook } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { FiLinkedin } from "react-icons/fi";
import Border from '../../All UI/Border';
const Mainfoter = () => {
    return (
        <div className="lg:mx-[60px] md:mx-[60px] mx-4 mt-10">
            <div className="main-content grid lg:grid-cols-4 gap-4 md:grid-cols-4">
                    <div className="logo-area ">
                        <div className="logog">
                            <img className="h-[50px] w-[50px] rounded-full border" src={ Foterloggo } alt="" />
                        </div>
                        <div className="logo-area flex gap-4 mt-10">
                            <div className="facebook hover:-translate-y-2 p-2 duration-300 cursor-pointer rounded-sm  custom-shadaw">
                             <FiFacebook className=" h-9 w-9 text-[#C4CFDE]" />
                            </div>
                            <div className="facebook hover:-translate-y-2 p-2 duration-300 cursor-pointer  rounded-sm   custom-shadaw">
                             <CiTwitter className=" h-9 w-9 text-[#C4CFDE]" />
                            </div>
                            <div className="facebook hover:-translate-y-2 p-2 duration-300 cursor-pointer  rounded-sm   custom-shadaw">
                             <FiFacebook className=" h-9 w-9 text-[#C4CFDE]" />
                            </div>
                        </div>
                   </div>
                   <div className="quick-link">
                     <div className="items">
                        <h1 className="uppercase text-[18px] font-mainFont  text-[#FF014F]">Quick link</h1>
                        <ul className="text-[#C4CFDE] text-[16px] mt-4">
                            <li className="mb-2 cursor-pointer text-[18px] relative custom-li overflow-hidden"><span className="custom-design inline-block">Authentication</span></li>   
                            <li className="mb-2 cursor-pointer text-[18px] relative custom-li overflow-hidden"><span className="custom-design inline-block">System Status</span></li>
                            <li className="mb-2 cursor-pointer text-[18px] relative custom-li overflow-hidden"><span className="custom-design inline-block">Terms of Service</span></li>
                            <li className="mb-2 cursor-pointer text-[18px] relative custom-li overflow-hidden"><span className="custom-design inline-block">Pricing</span></li>
                            <li className="mb-2 cursor-pointer text-[18px] relative custom-li overflow-hidden"><span className="custom-design inline-block">Over Right</span></li>
                        </ul>
                     </div>
                   </div>
                   <div className="resurce">
                   <div className="items">
                        <h1 className="uppercase text-[18px] font-mainFont  text-[#FF014F]">RESOURCES</h1>
                        <ul className="text-[#C4CFDE] text-[16px] mt-4">
                            <li className="mb-2 cursor-pointer text-[18px] relative custom-li overflow-hidden"><span className="custom-design inline-block">Documentation</span></li>   
                            <li className="mb-2 cursor-pointer text-[18px] relative custom-li overflow-hidden"><span className="custom-design inline-block">Authentication</span></li>
                            <li className="mb-2 cursor-pointer text-[18px] relative custom-li overflow-hidden"><span className="custom-design inline-block">API Reference</span></li>
                            <li className="mb-2 cursor-pointer text-[18px] relative custom-li overflow-hidden"><span className="custom-design inline-block">Support</span></li>
                            <li className="mb-2 cursor-pointer text-[18px] relative custom-li overflow-hidden"><span className="custom-design inline-block">Open Source</span></li>
                        </ul>
                     </div>
                   </div>
                   <div className="developpper">
                   <div className="items">
                        <h1 className="uppercase text-[18px] font-mainFont  text-[#FF014F]">DEVELOPERS</h1>
                        <ul className="text-[#C4CFDE] text-[16px] mt-4">
                            <li className="mb-2 cursor-pointer text-[18px] relative custom-li overflow-hidden"><span className="custom-design inline-block">About</span></li>   
                            <li className="mb-2 cursor-pointer text-[18px] relative custom-li overflow-hidden"><span className="custom-design inline-block">Portfolio</span></li>
                            <li className="mb-2 cursor-pointer text-[18px] relative custom-li overflow-hidden"><span className="custom-design inline-block">Services</span></li>
                            <li className="mb-2 cursor-pointer text-[18px] relative custom-li overflow-hidden"><span className="custom-design inline-block">Blog</span></li>
                            <li className="mb-2 cursor-pointer text-[18px] relative custom-li overflow-hidden"><span className="custom-design inline-block">Contact</span></li>
                        </ul>
                     </div>
                   </div>
            </div>
            <Border></Border>
            <div className="developer-area">
                <h1 className="text-center text-[20px] pb-4 text-[#828993]">This site develop by Rakib</h1>
            </div>
        </div>
    );
};

export default Mainfoter;