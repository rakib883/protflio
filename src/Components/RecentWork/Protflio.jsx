
import firstImage from '../../assets/first.png' 
import amajhon from '../../assets/amajhon.png'   
import newbazar from '../../assets/nwebazar.png'   
import { RiWindowsLine } from "react-icons/ri";   
import { CiHeart } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";
import { MdOutlineVideocam } from "react-icons/md";
import { BsBoxArrowUpRight } from "react-icons/bs";
import ProtfulioLink from './ProtfulioLink';
import Border from '../../All UI/Border';
import Title from '../../All UI/Title';
import { useState } from 'react';

const Protflio = () => {
//  tab area start
const [tab,setTab]= useState(1)


    const protflio =[
        {
            pic :firstImage,
            live:"https://shop-z3aw.vercel.app/",
            repo:"https://github.com/rakib883/protflio.git",
            topIcon : <RiWindowsLine className="w-5 h-5 font-bold text-[#3B3A47]" />,
            type : "Shop",
            heart : <CiHeart className="text-[]"/>,
            des :"E-Comarch web templete using React js",
            arrow : <MdArrowOutward />,
        },
        {
            pic :amajhon,
            live:"https://newamajhon.vercel.app/",
            repo:"https://github.com/rakib883/newamajhon.git",
            topIcon :<MdOutlineVideocam className="w-5 h-5 text-[#3B3A47]"/>,
            type : "BuyNow.com",
            heart : <CiHeart />,
            des :"E-Comarch web templete Using Next.js",
            arrow : <MdArrowOutward />,
        },
        {
            pic :newbazar,
            live:"https://newbazar.vercel.app/",
            repo:"https://github.com/rakib883/bazar.git",
            topIcon : <BsBoxArrowUpRight className="w-5 h-5 text-[#3B3A47]"/>,
            type : "Bazar",
            heart : <CiHeart />,
            des :"E-Comarch web templete ReduxTolkit state Management",
            arrow : <MdArrowOutward />,
        },
        {
            pic :firstImage,
            live:"https://vercel.com/rakib883s-projects/shop-z3aw/9wTh6Hng9iELT8AkFaCe8Fkm9zn4",
            repo:"https://github.com/rakib883/protflio.git",
            topIcon : <RiWindowsLine className="w-5 h-5 text-[#3B3A47]"/>,
            type : "game",
            heart : <CiHeart />,
            des :"work out web site design and development.",
            arrow : <MdArrowOutward />,
        },
        {
            pic :firstImage,
            live:"https://vercel.com/rakib883s-projects/shop-z3aw/9wTh6Hng9iELT8AkFaCe8Fkm9zn4",
            repo:"https://github.com/rakib883/protflio.git",
            topIcon : <RiWindowsLine className="w-5 h-5 text-[#3B3A47]"/>,
            type : "Gallery",
            heart : <CiHeart />,
            des :"mobile app aplaction landing design and development",
            arrow :<MdArrowOutward />,
        },
        {
            pic :firstImage,
            live:"https://vercel.com/rakib883s-projects/shop-z3aw/9wTh6Hng9iELT8AkFaCe8Fkm9zn4",
            repo:"https://github.com/rakib883/protflio.git",
            topIcon : <RiWindowsLine className="w-5 h-5 text-[#3B3A47]"/>,
            type : "Stardant",
            heart : <CiHeart />,
            des :"restuenrt app  design and and mobile applaction",
            arrow : <MdArrowOutward />,
        },
    ]
    return (
        <section name="Protflio" className="main">
            <div className="title mt-16 text-center">
               <Title  title="My Recent Works" />
            </div>
            <div className="tab-area my-8 bg-[#f6f3fc] max-w-lg mx-auto rounded-full">
                <div className="content flex justify-between items-center ">
                    <div onClick={()=>setTab(1)}  className={`item rounded-full py-3 px-8 cursor-pointer ${tab === 1 ? "bg-gradient-to-r from-[#7645d9] from-10% via-[#7645d9] via-40% to-[#321962] text-white" : "text-[#896bf8]"}`}>
                        <p>All</p>
                    </div>
                    <div onClick={()=>setTab(2)}  className={`item rounded-full py-3 px-8 cursor-pointer ${tab === 2 ? "bg-gradient-to-r from-[#7645d9] from-10% via-[#7645d9] via-40% to-[#321962] text-white" : "text-[#896bf8]"}`}>
                        <p>Web </p>
                    </div>
                    <div onClick={()=>setTab(3)}  className={`item rounded-full py-3 px-8 cursor-pointer ${tab === 3 ? "bg-gradient-to-r from-[#7645d9] from-10% via-[#7645d9] via-40% to-[#321962] text-white" : "text-[#896bf8]"}`}>
                        <p>ARP</p>
                    </div>
                    <div onClick={()=>setTab(4)}  className={`item rounded-full py-3 px-8 cursor-pointer ${tab === 4 ? "bg-gradient-to-r from-[#7645d9] from-10% via-[#7645d9] via-40% to-[#321962] text-white" : "text-[#896bf8]"}`}>
                        <p>UI/UX</p>
                    </div>
                </div>
            </div>
            <div className="main-content mt-8 mx-[10px]">
                <div className="content grid grid-cols-1 md:lg:grid-cols-3 md:grid-cols-3 gap-5">
                   {
                    protflio.map(items =><ProtfulioLink
                      key = {items.icon}
                      items = {items}
                    ></ProtfulioLink>)
                   }
                </div>
            </div>
        </section>
    );
};

export default Protflio;