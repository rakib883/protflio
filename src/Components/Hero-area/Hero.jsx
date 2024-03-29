import { Typewriter } from 'react-simple-typewriter'
import logo from '../../../public/faby.png'
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { LiaInvision } from "react-icons/lia";
import { PiSketchLogo } from "react-icons/pi";
import { TbBrandFigma } from "react-icons/tb";
import Border from '../../All UI/Border';
const Hero = () => {

    return (
        <section name="hero" className="main-area">
            <div className="all-content grid lg:grid-cols-2  lg:gap-2">
                <div className="text-area  ">
                    <div className="all-text lg:mt-[100px]  flex flex-col lg:py-[40px] mt-10 md:gap-5">
                        <p className="text-[#C4CFDE] font-mainFont   text-[14px] tracking-[3px]">WELCOME TO MY WORLD</p>
                        <h1 className="lg:text-[60px] text-[20px] text-[#FFFFFF] lg:leading-[70px]  font-bold">Hi, I'AM <span className="text-[#FF014F]">Rakib SHEIKH</span></h1>
                         <p className="lg:text-[60px] md:text-[60px] text-[20px] text-[#FFFFFF] leading-[70px]  font-bold"> A  
                           <Typewriter
                                words={['developer', 'UI/UX designer', 'Profesonal coder']}
                                loop={0}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                         </p>
                         <p className="text-[#C4CFDE] font-mainFont font-medium">
                            I use animation as a third dimension by which to simplify experiences and 
                            kuiding thro each and every interaction. 
                            I’m not adding motion just to spruce things up, but doing it in ways that.
                         </p>
                    </div>
                    <div className="social-area grid lg:grid-cols-2  md:grid-cols-2 lg:mt-40 gap-10">
                        <div className="find-with-me  w-full">
                            <div className="title">
                                <p className="text-[14px] font-mainFont uppercase text-[#C4CFDE] tracking-[2px]">find with me</p>
                                 <div className="main-area mt-4 flex gap-4">
                                    <div className="flex justify-center p-4 items-center hover:bg-[#1A1C20] hover:-translate-y-1 duration-300 custom-shadaw w-[60px] h-[60px]">
                                        <FiFacebook className="text-[#C4CFDE] hover:bg-[#1A1C20]   h-[30px] w-[30px] rounded cursor-pointer" />
                                    </div>
                                    <div className="flex justify-center p-4 hover:bg-[#1A1C20] hover:-translate-y-1 duration-300  items-center custom-shadaw w-[60px] h-[60px]">
                                        <FiTwitter className="text-[#C4CFDE] hover:bg-[#1A1C20]  h-[30px] w-[30px] rounded cursor-pointer" />
                                    </div>
                                    <div className="flex justify-center hover:bg-[#1A1C20] hover:-translate-y-1 p-4 duration-300 items-center custom-shadaw w-[60px] h-[60px]">
                                        <FiLinkedin className="text-[#C4CFDE] h-[30px] w-[30px] rounded cursor-pointer" />
                                    </div>
                                 </div>
                            </div>
                        </div>
                        <div className="my-skill w-full">
                          <p className="text-[14px] font-mainFont uppercase text-[#C4CFDE] tracking-[2px]">best skill on</p>
                          <div className="main-area mt-4 flex gap-4">
                                    <div className="flex justify-center p-4 items-center hover:bg-[#1A1C20] hover:-translate-y-1 duration-300 custom-shadaw w-[60px] h-[60px]">
                                        <LiaInvision  className="text-[#C4CFDE] hover:bg-[#1A1C20]   h-[30px] w-[30px] rounded cursor-pointer" />
                                    </div>
                                    <div className="flex justify-center p-4 hover:bg-[#1A1C20] hover:-translate-y-1 duration-300  items-center custom-shadaw w-[60px] h-[60px]">
                                        <PiSketchLogo className="text-[#C4CFDE] hover:bg-[#1A1C20]  h-[30px] w-[30px] rounded cursor-pointer" />
                                    </div>
                                    <div className="flex justify-center hover:bg-[#1A1C20] hover:-translate-y-1 p-4 duration-300 items-center custom-shadaw w-[60px] h-[60px]">
                                        <TbBrandFigma  className="text-[#C4CFDE] h-[30px] w-[30px] rounded cursor-pointer" />
                                    </div>
                                 </div>
                        </div>
                    </div>
                </div>
                <div className="image-area md:justify-center mt-5  flex lg:justify-end">
                    <img className="w-full" src={logo} alt="" />
                </div>
            </div>
            <Border></Border>
        </section>
    );
};

export default Hero;