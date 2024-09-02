import Title from "../../All UI/Title"
import { FaFigma } from "react-icons/fa";
import { GrJs } from "react-icons/gr";
import { FaReact } from "react-icons/fa";
import { SiAdobexd } from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io5";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion"
const Skill = () => {
  return (
    <div>
        <div className="content mb-20">
            <motion.div 
             initial={{y:50,opacity:0}}
             whileInView={{y:0,opacity:1,transition:{duration:2}}}
            className="title text-center"> 
                <Title title="My Skills" />
                <div className=" max-w-lg mx-auto my-4">
                    <p className=" text-[16px] text-[#140c1d]">
                      We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.
                    </p>
                </div>
            </motion.div>
            <div className="skill-area mx-20 mt-8">
                <motion.div 
                 initial={{y:50,opacity:0}}
                 whileInView={{y:0,opacity:1,transition:{duration:2}}}
                className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                   <div className="item">
                        <div className="content group  h-[150px] w-[150px] ">
                                <div className="image bg-[#f6f3fc] hover:hover:bg-[#321963] cursor-pointer duration-300 py-6 rounded-2xl flex flex-col justify-center items-center">
                                    <IoLogoHtml5 className=" text-[#dd4b25] text-6xl" />
                                    <p className=" text-[#747779] font-semibold mt-4 group-hover:text-white">80%</p>
                                </div>
                        </div>
                        <p className=" text-[16px] text-center mt-2 text-[#804ceb]">HTML</p>
                   </div>
                  <div className="item">
                    <div className="content group  h-[150px] w-[150px] ">
                            <div className="image bg-[#f6f3fc] hover:hover:bg-[#321963] cursor-pointer duration-300 py-6 rounded-2xl flex flex-col justify-center items-center">
                                <BiLogoTailwindCss className=" text-[#31b8f7] text-6xl" />
                                <p className=" text-[#747779] font-semibold mt-4 group-hover:text-white">60%</p>
                            </div>
                    </div>
                    <p className=" text-[16px] text-center mt-2 text-[#804ceb]">Tawlend css</p>
                  </div>
                  <div className="item">
                    <div className="content group  h-[150px] w-[150px] ">
                            <div className="image bg-[#f6f3fc] hover:hover:bg-[#321963] cursor-pointer duration-300 py-6 rounded-2xl flex flex-col justify-center items-center">
                                <GrJs className="text-yellow-400 group-hover:text-white text-6xl" />
                                <p className=" text-[#747779] font-semibold mt-4 group-hover:text-white">50%</p>
                            </div>
                    </div>
                    <p className=" text-[16px] text-center mt-2 text-[#804ceb]">js</p>
                  </div>
                <div className="item">
                    <div className="content group  h-[150px] w-[150px] ">
                            <div className="image bg-[#f6f3fc] hover:hover:bg-[#321963] cursor-pointer duration-300 py-6 rounded-2xl flex flex-col justify-center items-center">
                                <FaReact className="  text-6xl text-[#00d1f7]" />
                                <p className=" text-[#747779] font-semibold mt-4 group-hover:text-white">80%</p>
                            </div>
                    </div>
                    <p className=" text-[16px] text-center mt-2 text-[#804ceb]">React JS</p>
                </div>
                  <div className="main">
                    <div className="content group  h-[150px] w-[150px] ">
                            <div className="image bg-[#f6f3fc] hover:hover:bg-[#321963] cursor-pointer duration-300 py-6 rounded-2xl flex flex-col justify-center items-center">
                                <SiNextdotjs className=" text-[#000000] text-6xl" />
                                <p className=" text-[#747779] font-semibold mt-4 group-hover:text-white">50%</p>
                            </div>
                    </div>
                    <p className=" text-[16px] text-center mt-2 text-[#804ceb]">Next.JS</p>
                  </div>
                  <div className="main">
                    <div className="content group  h-[150px] w-[150px] ">
                            <div className="image bg-[#f6f3fc] hover:hover:bg-[#321963] cursor-pointer duration-300 py-6 rounded-2xl flex flex-col justify-center items-center">
                                <FaFigma className=" group-hover:text-white text-6xl" />
                                <p className=" text-[#747779] font-semibold mt-4 group-hover:text-white">50%</p>
                            </div>
                    </div>
                    <p className=" text-[16px] text-center mt-2 text-[#804ceb]">Figma</p>
                  </div>
                  <div className="main">
                    <div className="content group  h-[150px] w-[150px] ">
                            <div className="image bg-[#f6f3fc] hover:hover:bg-[#321963] cursor-pointer duration-300 py-6 rounded-2xl flex flex-col justify-center items-center">
                                <SiAdobexd className=" group-hover:text-white text-6xl" />
                                <p className=" text-[#747779] font-semibold mt-4 group-hover:text-white">20%</p>
                            </div>
                    </div>
                    <p className=" text-[16px] text-center mt-2 text-[#804ceb]">XD</p>
                  </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Skill