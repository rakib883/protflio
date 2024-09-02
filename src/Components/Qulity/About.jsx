import { MdArrowOutward } from "react-icons/md";
import Title from "../../All UI/Title";
import { motion } from "framer-motion"
const About = () => {
    return (
        <section className="bg-[#f6f3fc] pb-10">
           <motion.div 
             initial={{y:50,opacity:0}}
             whileInView={{y:0,opacity:1,transition:{duration:2}}}
           className="content pt-20">
              <div className="title text-center">
                 <Title title="My Quality Services"/>
                  <div className="pragraph max-w-2xl mx-auto my-2 text-[#383f8a] text-[16px] ">
                     <p className="">We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
                  </div>
              </div>
           </motion.div>
           <div className="content py-10 mx-4">
             <div className="item hover:bg-gradient-to-r from-[#7e4ae7] via-[#7e4ae7] via-50% to-gray-600 t0-50%  duration-300">
               <div className="px-4 md:flex justify-between group items-center cursor-pointer py-8 border-b-gray-400 border-b">
                  <div className="title md:mx-4  w-full">
                     <h1 className=" text-[20px] md:text-[30px] font-bold text-[#8650f6] group-hover:text-white">01 Frontend Web development</h1>
                  </div>
                  <div className="des max-w-lg group-hover:text-white">
                     <p>
                        I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people
                     </p>
                  </div>
                  <div className="icon mx-4 hidden md:block group-hover:text-white">
                     <MdArrowOutward className=" text-3xl" />
                  </div>
               </div>
             </div>
             <div className="item hover:bg-gradient-to-r from-[#7e4ae7] via-[#7e4ae7] via-50% to-gray-600 t0-50%  duration-300">
               <div className=" px-4 md:flex justify-between group items-center cursor-pointer py-8 border-b-gray-400 border-b">
                  <div className="title md:mx-4  w-full">
                     <h1 className=" text-[20px] md:text-[30px] font-bold text-[#8650f6] group-hover:text-white">02 Bakend Development</h1>
                  </div>
                  <div className="des max-w-lg group-hover:text-white">
                     <p>
                        I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people
                     </p>
                  </div>
                  <div className="icon mx-4 hidden md:block group-hover:text-white">
                     <MdArrowOutward className=" text-3xl" />
                  </div>
               </div>
             </div>
             <div className="item hover:bg-gradient-to-r from-[#7e4ae7] via-[#7e4ae7] via-50% to-gray-600 t0-50%  duration-300">
                  <div className=" px-4 md:flex justify-between group items-center cursor-pointer py-8 border-b-gray-400 border-b ">
                     <div className="title md:mx-4  w-full">
                        <h1 className=" text-[20px] md:text-[30px] font-bold text-[#8650f6] group-hover:text-white">03 ARP Software Development</h1>
                     </div>
                     <div className="des max-w-lg group-hover:text-white">
                        <p>
                           I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people
                        </p>
                     </div>
                     <div className="icon mx-4 hidden md:block group-hover:text-white">
                        <MdArrowOutward className=" text-3xl" />
                     </div>
                  </div>
             </div>
           </div>
        </section>
    );
};

export default About;