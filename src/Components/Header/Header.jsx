import React, { useState } from 'react';
import logo from '../../../public/faby.png'
import Button from '../../All UI/Button';
import { HiMiniBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion"
import Border from '../../All UI/Border';
import { Link,handleSetActive} from 'react-scroll';
const Header = () => {
const navitems = [

    {name :"Home" , path : "hero" },
    {name :"About" , path : "about" },
    {name :"Protflio" , path : "Protflio" },
    {name :"Contact" , path : "Contact" },
    
    
]



const [showMobile , setShowMobile] = useState(false)

    return (
        <section  className="bg-[#212428] z-50 sticky top-0">
            <div className=" mx-[60px] py-2  all-foter-content lg:h-[100px] flex justify-between items-center">
                <div className="logo-area">
                    <img className="lg:h-[60px]  md:h-[60px] md:w-[60px] h-[30px] w-[30px] border lg:w-[60px] rounded-full" src={logo} alt="" />
                </div>
                 <div className="menu-area  flex items-center">
                    <div className="menu-items hidden gap-6  md:flex lg:flex">
                        {
                           navitems.map(items =>
                             <div key={items.name} items ={items} className="menu">
                                 <Link
                                    activeClass="active" 
                                    spy={true} 
                                    smooth={true} 
                                    offset={-10} 
                                    duration={500} 
                                    onSetActive={handleSetActive}
                                 
                                 
                                 to={items.path} className="text-[#9BADB1] cursor-pointer text-[14px]  uppercase font-mainFont">{items.name}</Link>
                             </div>
                           ) 
                        }
                    </div>
                    <div className="button">
                        <Button className="uppercase px-4 py-3 rounded-sm text-[13px]" title="Haire me"></Button>
                    </div>
                    <div  className="icon-area px-2 lg:hidden md:hidden " onClick={() =>setShowMobile(!showMobile)}>
                         <HiMiniBars3  className="text-[#FFFFFF] text-[24px] cursor-pointer"/>
                    </div>
                 </div>
            </div>
            <div className="items">
                {
                    showMobile && <div className="all-mobile-menu bg-[#070808] lg:hidden md:hidden h-screen absolute top-0 w-full ">
                          <motion.div  
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5 }}  
                          className="main-content w-1/2 h-screen bg-[#191B1E] p-4">
                                <div className="profile-area flex justify-between items-center mt-4">
                                    <div className="profile ">
                                        <img className="h-[60px] w-[60px]   border  rounded-full" src={logo} alt="" />
                                    </div>
                                     <div className="icon custom-shadaw p-4 rounded-full" onClick={() =>setShowMobile(!showMobile)}>
                                        <RxCross1  className=" cursor-pointer text-[20px] text-[#FB024E] "/>
                                     </div>
                                </div>
                                <div className="pragraph-area py-4">
                                   <p className="text-[#C4CFDE] font-mainFont">
                                         This is Rakib sheikh web developper 
                                     </p>
                                </div>
                              {/* mobile-menu-area- start */}
                              <div className="mobile-menu">
                                <Border></Border>
                              </div>
                              <div  className="mobile-menu flex flex-col gap-2 text-[#C0CAD9] cursor-pointer">
                              {
                               navitems.map(items =>
                                <div  key={items.name} items ={items} className="menu">
                                 <Link
                                    
                                    activeClass="active" 
                                    spy={true} 
                                    smooth={true} 
                                    offset={-10} 
                                    duration={500} 
                                    onSetActive={handleSetActive}
                                    
                                  to={items.path} className="text-[#9BADB1] cursor-pointer text-[14px]  uppercase font-mainFont">{items.name}</Link>
                             </div>
                           ) 
                        }
                              </div>
                              <div className="social-area">
                                
                              </div>
                          </motion.div>
                    </div>
                   
                } 
            </div>
        </section>
    );
};

export default Header;