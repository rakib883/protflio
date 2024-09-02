
import logo from '../../../public/faby.png'
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { LuDownload } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion"

const Hero = () => {

    return (
        <section  className="main bg-gradient-to-r from-white via-white to-[#e6dafd]"> 
            <div className="all-content md:flex justify-between gap-10 items-center py-4 mx-8  md:mx-20">
                <motion.div
                 initial={{x:-50,opacity:0}}
                 whileInView={{x:0,opacity:1,transition:{duration:3}}}
                className="text-area text-center lg:text-start w-full md:w-[50%]">
                    <div className="all-text   flex flex-col  mt-10 gap-2 md:gap-5">
                        <p className=" font-sans   text-[14px] tracking-[3px] bodyFont">WELCOME TO MY WORLD</p>
                        <h1 className="lg:text-[40px] text-[20px] lg:leading-[70px]  font-bold bodyFont">Hi, I'AM <span className="text-[#2a1454]">Rakib SHEIKH</span></h1>

                         <p className=" font-sans font-medium bodyFont">
                             As a React js developer. My expertise in front-end   development, 
                             enabling me to create user-friendly and responsive web applications using 
                             React and Next js its associated ecosystem. Beyond my technical proficiency, 
                             I am known for my strong communication skills and ability to collaborate effectively 
                             within a team. I am passionate about continuous growth as a developer and eagerly seek opportunities to make meaningful contributions to projects and teams. 
                         </p>
                    </div>
                    <div className="social-area  md:flex items-center py-8  ">
                       <div className=" w-full flex justify-center items-center">
                             <button className=" flex px-6 bodyFont hover:bg-[#844ef3] duration-300 hover:text-white  md:py-4 py-2  items-center gap-2 text-[#844ef3] border border-[#844ef3] rounded-full">Download CV <LuDownload className="text-xl" /> </button>
                        </div>
                        <div className=" mt-4 md:mt-0 text-center w-full">
                            <div className="title bodyFont">
                                 <div className="main-area flex justify-center md:justify-start items-center gap-4">
                                   <a href="https://github.com/rakib883" className="flex border group border-[#8650f6] hover:bg-[#8650f6] rounded-full  justify-center  items-center   duration-300 custom-shadaw w-[40px] h-[40px]">
                                        <FaGithub className=" text-[20px] rounded cursor-pointer text-[#8650f6]  group-hover:text-white" />
                                    </a>
                                    <a href="https://www.facebook.com/mdrakibshik.rakib" className="flex border group border-[#8650f6] hover:bg-[#8650f6] rounded-full  justify-center  items-center   duration-300 custom-shadaw w-[40px] h-[40px]">
                                        <FiFacebook className=" text-[20px] rounded cursor-pointer text-[#8650f6]  group-hover:text-white" />
                                    </a>
                                    <a href="" className="flex group border border-[#8650f6] hover:bg-[#8650f6] justify-center   rounded-full  duration-300  items-center custom-shadaw w-[40px] h-[40px]">
                                        <FiTwitter className="  text-[20px] group-hover:text-white   rounded cursor-pointer text-[#8650f6]" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/rakib883/" className="flex group border border-[#8650f6] hover:bg-[#8650f6] justify-center rounded-full   duration-300 items-center custom-shadaw w-[40px] h-[40px]">
                                        <FiLinkedin className="  rounded cursor-pointer text-[20px] group-hover:text-white text-[#8650f6]" />
                                    </a>
                                 </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
               <div className="item w-full md:w-[50%]  flex justify-center items-center">
                    <div className="image-area max-w-[400px] cursor-pointer bg-black rotate-2 hover:rotate-0 duration-300 rounded-2xl md:justify-center mx-[10px] md:mx-[1px] mt-5  flex lg:justify-end">
                        <img className="w-full rounded-2xl h-full  object-contain" src={logo} alt="" />
                    </div>
               </div>
            </div>
        </section>
    );
};

export default Hero;