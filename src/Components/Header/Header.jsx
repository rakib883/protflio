import { Link } from "react-router-dom";
import { HiBars4 } from "react-icons/hi2";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";
const Header = () => {
const navitems = [

    {name :"Home" , path : "/" },
    {name :"About" , path : "about" },
    {name :"Protflio" , path : "Protflio" },
    {name :"Contact" , path : "Contact" },
    
    
]
 
   
// menu trigger area start

const [menu,setMenu] = useState(false)

    return (
       <div className="main bg-gradient-to-r sticky top-0 z-50 shadow-2xl from-white via-white to-[#e6dafd] py-2 md:py-6">
          <div className="all-content relative flex justify-between items-center  md:mx-20  ">
             <div className="icon flex items-center mx-8 md:mx-0 gap-2">
                <Link to="/" className="logo text-4xl font-bold text-[#2a1454] ">R</Link>
                <div className="gmail hover:text-[#8650f6] cursor-pointer duration-300">
                    Sheikhrakib883@gmail.com
                </div>
             </div>
              
             <div className="menu ">
                <div className="menu hidden md:block">
                    <div className="menu flex gap-6 items-center">
                        <div className="menu flex gap-6 ">
                                {
                                    navitems.map((item)=>
                                    <Link to={item?.path} key={item?.name} className="main-area text-[16px] font-medium ">{item?.name}</Link>
                                    ) 
                                }
                        </div>
                        <div className="haireme">
                            <button className="bg-gradient-to-r from-[#814ced] to-[#3a1e70] hover:bg-gradient-to-r hover:from-[#3a1e70] hover:to-[#814ced] px-6 py-2 rounded-full text-white transition-all duration-300">
                                Haire Me
                            </button>
                        </div>
                    </div>
                </div>
                {/* mobile menu */}
                 <div onClick={()=>setMenu(true)} className="items mx-8 md:mx-0 cursor-pointer md:hidden relative w-full">
                   <div className="icon">
                      <HiBars4 className=" text-2xl" />
                   </div>
                 </div>
             </div>
                   <div className={`menu-item md:hidden  absolute ${menu === true ? "left-0 duration-300 " :"left-[100%] duration-300" } top-[-10px]  bg-gradient-to-r  shadow-2xl from-white via-white to-[#e6dafd] min-h-screen w-full`}>
                      <div className="content ">
                        <div className="bg-[#8650f6] ">
                           <div className="content mx-8 py-2 flex justify-between items-center">
                               <div className="logo mx-4">
                                 <Link className=" text-3xl cursor-pointer">R</Link>
                               </div>
                               <div onClick={()=>setMenu(false)} className="cross cursor-pointer mx-4">
                                 <FaXmark className=" text-3xl" />
                               </div>
                           </div>
                        </div>
                        <div className="menu flex flex-col gap-6 text-center ">
                                    {
                                        navitems.map((item)=>
                                        <Link onClick={()=>setMenu(false)} to={item?.path} key={item?.name} className="main-area text-[16px] font-medium hover:bg-gray-300 py-3 ">{item?.name}</Link>
                                        ) 
                                    }
                            </div>
                       </div>
                   </div>
          </div>
       </div>
    );
};

export default Header;