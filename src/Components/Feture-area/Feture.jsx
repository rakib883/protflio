import React from 'react';
import Subtitle from '../../All UI/Subtitle';
import Maintitle from '../../All UI/Maintitle';
import { HiMiniBars4 } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdBook } from "react-icons/io";
import { PiTelevisionSimple } from "react-icons/pi";
import FetureLink from './FetureLink';
import Border from '../../All UI/Border';

const Feture = () => {
    const feture = [
        { 
            icon : <HiMiniBars4 className="md:h-[60px] md:w-[60px] h-[40px] w-[40px]  text-[#FF014F]" /> ,
            name : "business stratagy",
            des  :"I throw myself down among the tall grass by the stream as Ilie close to the earth. stream as Ilie close to the earth",
            downIcon : <FaArrowRight className="h-[30px] w-[30px] md:w-[20px] md:h-[20px] text-[#FF014F]"/>   
        },
        {
            icon :<IoMdBook className="md:h-[60px] md:w-[60px] h-[40px] w-[40px]  text-[#FF014F]"/> ,
            name :"App development",
            des: "We’ll handle everything from to app development process until it is time to make your project live.",
            downIcon : <FaArrowRight className="h-[30px] w-[30px] md:w-[20px] md:h-[20px] text-[#FF014F]"/> 
            
        },
        {
            icon : <PiTelevisionSimple className="md:h-[60px] md:w-[60px] h-[40px] w-[40px]  text-[#FF014F]"/>,
            name : "business stratagy",
            des : "We’ll help you optimize your business processes to maximize profitability and eliminate unnecessary costs.",
            downIcon : <FaArrowRight className="h-[30px] w-[30px] md:w-[20px] md:h-[20px] text-[#FF014F]"/> 
            
        }
   ] 
    return (
        <div className="main">
            <div className="feture-content w-full md:leading-[25px] lg:leading-[50px] flex flex-col">
                <div className="title text-center">
                    <Subtitle className=" text-[14px]" title="FEATURES"></Subtitle>
                </div>
                <div className="main-title  text-center">
                    <Maintitle className=""  title="what i do"></Maintitle>
                </div>
            </div>
            <div className="feture-items grid lg:grid-cols-3 md:grid-cols-3 gap-4">
                {
                    feture.map(items =><FetureLink
                      key ={items.icon}
                      items = {items}
                    ></FetureLink>)
                }
            </div>
          <Border></Border>
        </div>
    );
};

export default Feture;