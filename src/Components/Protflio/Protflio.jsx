import React from 'react';
import Subtitle from '../../All UI/Subtitle';
import Maintitle from '../../All UI/Maintitle';
import firstImage from '../../assets/portfolio-05.jpg'
import secendimage from '../../assets/portfolio-06.jpg'
import thirdimage from '../../assets/portfolio-large-01-800x600.jpg'
import fourimage from '../../assets/portfolio-large-04-800x600.jpg'
import fiveimage from '../../assets/portfolio-large-05-800x600.jpg'
import siximage from '../../assets/portfolio-large-06-800x600.jpg'
import { RiWindowsLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";
import { MdOutlineVideocam } from "react-icons/md";
import { BsBoxArrowUpRight } from "react-icons/bs";
import ProtfulioLink from './ProtfulioLink';
import Border from '../../All UI/Border';

const Protflio = () => {
    const protflio =[
        {
            pic :firstImage,
            topIcon : <RiWindowsLine className="w-5 h-5 font-bold text-[#3B3A47]" />,
            type : "gallery",
            heart : <CiHeart className="text-[]"/>,
            des :" NFT Dashboard Application Development.",
            arrow : <MdArrowOutward />,
        },
        {
            pic :secendimage,
            topIcon :<MdOutlineVideocam className="w-5 h-5 text-[#3B3A47]"/>,
            type : "Video",
            heart : <CiHeart />,
            des :"online food sell app design",
            arrow : <MdArrowOutward />,
        },
        {
            pic :thirdimage,
            topIcon : <BsBoxArrowUpRight className="w-5 h-5 text-[#3B3A47]"/>,
            type : "External link",
            heart : <CiHeart />,
            des :" Travel app design and creativety activity",
            arrow : <MdArrowOutward />,
        },
        {
            pic :fourimage,
            topIcon : <RiWindowsLine className="w-5 h-5 text-[#3B3A47]"/>,
            type : "game",
            heart : <CiHeart />,
            des :"work out web site design and development.",
            arrow : <MdArrowOutward />,
        },
        {
            pic :fiveimage,
            topIcon : <RiWindowsLine className="w-5 h-5 text-[#3B3A47]"/>,
            type : "Gallery",
            heart : <CiHeart />,
            des :"mobile app aplaction landing design and development",
            arrow :<MdArrowOutward />,
        },
        {
            pic :siximage,
            topIcon : <RiWindowsLine className="w-5 h-5 text-[#3B3A47]"/>,
            type : "Stardant",
            heart : <CiHeart />,
            des :"restuenrt app  design and and mobile applaction",
            arrow : <MdArrowOutward />,
        },
    ]
    return (
        <section name="Protflio" className="main">
            <div className="sub-title">
                <Subtitle className="uppercase text-center font-mainFont text-[14px]" title="visit my portfolio and keep your feedback visit"></Subtitle>
            </div>
            <div className="main-title">
                <Maintitle className="text-center uppercase font-mainFont" title="My Portfolio"></Maintitle>
            </div>
            <div className="main-content mt-8">
                <div className="content grid lg:grid-cols-3 md:grid-cols-3 gap-5">
                   {
                    protflio.map(items =><ProtfulioLink
                      key = {items.icon}
                      items = {items}
                    ></ProtfulioLink>)
                   }
                </div>
            </div>
          <Border></Border>
        </section>
    );
};

export default Protflio;