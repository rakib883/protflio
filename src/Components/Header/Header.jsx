
import logo from '../../../public/faby.png'
import Button from '../../All UI/Button';
import { HiMiniBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion"
import Border from '../../All UI/Border';
import { Link,handleSetActive} from 'react-scroll';
import { useState } from 'react';
const Header = () => {
const navitems = [

    {name :"Home" , path : "hero" },
    {name :"About" , path : "about" },
    {name :"Protflio" , path : "Protflio" },
    {name :"Contact" , path : "Contact" },
    
    
]

const [liveColor,setColor] = useState("red")


const [showMobile , setShowMobile] = useState(false)

    return (
        <section  className="bg-[#212428] z-50 sticky top-0 shadow-2xl">
            <div className=" mx-[10px] md:mx-[60px] py-2  all-foter-content lg:h-[100px] flex justify-between items-center">
                <div className="logo-area lg:h-[60px]  rounded-full overflow-hidden  md:h-[60px] md:w-[60px] h-[40px] w-[40px] border lg:w-[60px]">
                    <img className="w-full h-full object-contain" src={logo} alt="" />
                </div>
                 <div className="menu-area  flex items-center">
                    <div className="menu-items hidden gap-8  md:flex lg:flex">
                        {
                           navitems.map(items =>
                             <div key={items.name} className="menu font-sans">
                                 <Link
                                 to={items.path} className="text-[#9BADB1] cursor-pointer text-[14px]  uppercase font-sans">{items.name}</Link>
                             </div>
                           ) 
                        }
                    </div>
                    <div  className="icon-area px-2 ml-10 lg:hidden md:hidden " onClick={() =>setShowMobile(!showMobile)}>
                         <HiMiniBars3  className="text-[#FFFFFF] text-[24px] cursor-pointer"/>
                    </div>
                 </div>
                 <div className="button">
                    <Button className="uppercase px-4 py-3 rounded-sm text-[13px]" title="Haire me"></Button>
                 </div>
            </div>
            <div className="items">
                {
                    showMobile && <div className="all-mobile-menu bg-[#070808] lg:hidden md:hidden h-screen absolute top-0 w-full ">
                          <motion.div  
                          initial={{ y: -50 }}
                          animate={{  y: 0 }}
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
                                   <p className="text-[#C4CFDE] font-sans ">
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
                                <div  key={items.name} className="menu">
                                 <Link
                                   
                                    onClick={() =>{setShowMobile(!showMobile),setColor("red")}}
                                    activeClass="active" 
                                    spy={true} 
                                    smooth={true} 
                                    offset={-80} 
                                    duration={500} 
                                    onSetActive={handleSetActive}
                                    to={items.path} 
                                   className={` ${liveColor ? " bg-orange-300" : ""}text-[#9BADB1] cursor-pointer text-[14px]  uppercase font-sans`}>{items.name}
                                </Link>
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