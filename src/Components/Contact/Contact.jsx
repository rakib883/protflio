import Title from "../../All UI/Title"
import { BiPhoneCall } from "react-icons/bi";
import { SiGmail } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className=" bg-[#f6f3fc]">
        <div className="content mx-4 md:flex items-center gap-8 py-20">
            <div className="contact w-full md:w-[50%] bg-white rounded-xl">
                <motion.div 
                 initial={{x:-50,opacity:0}}
                 whileInView={{x:0,opacity:1,transition:{duration:2}}}
                className="content p-8">
                    <div className="title">
                        <Title title="Let’s work together!" />
                        <p>
                          I design and code beautifully simple things and i love what i do. Just simple like that!
                        </p>
                    </div>
                    <div className="form-area mt-8 flex flex-col gap-4">
                        <div className="name-area flex gap-4">
                            <input className=" outline-none border-[1px] py-3 px-4 w-full rounded-md bg-[#f6f3fc] border-[#a095b5]" type="text" placeholder="First Name " />
                            <input className=" outline-none border-[1px] py-3 px-4 w-full rounded-md bg-[#f6f3fc] border-[#a095b5]" type="text" placeholder="Last Name " />
                        </div>
                        <div className="name-area flex gap-4">
                            <input className=" outline-none border-[1px] py-3 px-4 w-full rounded-md bg-[#f6f3fc] border-[#a095b5]" type="text" placeholder="Email address " />
                            <input className=" outline-none border-[1px] py-3 px-4 w-full rounded-md bg-[#f6f3fc] border-[#a095b5]" type="text" placeholder="Phone Number " />
                        </div>
                        <div className="name-area gap-4">
                            <select className=" outline-none cursor-pointer border-[1px] py-3 px-4 w-full rounded-md bg-[#f6f3fc] border-[#a095b5]" name="" id="">
                                <option value="">--Please Choose another option--</option>
                                <option value="">Web Design</option>
                                <option value="">App Design</option>
                                <option value="">ARP Design</option>
                            </select>
                        </div>
                        <div className="text-area">
                            <textarea className=" outline-none border-[1px] py-3 px-4 w-full rounded-md bg-[#f6f3fc] border-[#a095b5]" placeholder="Text your message" name="" id=""></textarea>
                        </div>
                        <button className=" px-6 py-3 bg-gradient-to-r from-[#814ced] text-white to-[#3a1e70] hover:bg-gradient-to-r hover:from-[#3a1e70] hover:to-[#814ced] rounded-xl">Send Message</button>
                    </div>
                </motion.div>
            </div>
            <div className="text w-full md:w-[50%]">
               <motion.div    
               initial={{x:50,opacity:0}}
               whileInView={{x:0,opacity:1,transition:{duration:2}}}
               className="content flex flex-col gap-4 pt-4 md:pt-0">
                    <div className="item flex items-center gap-4">
                        <div className=" cursor-pointer  bg-gradient-to-r from-[#814ced] text-white to-[#3a1e70] hover:bg-gradient-to-r hover:from-[#3a1e70]to-[#814ced] h-10 w-10 rounded-full flex justify-center items-center">
                           <BiPhoneCall className=" text-2xl text-white" />
                        </div>
                        <div className="text">
                            <p className=" text-[16px]">Phone</p>
                            <p className=" text-[20px]">0172826211</p>
                        </div>
                    </div>
                    <div className="item flex items-center gap-4">
                        <div className=" cursor-pointer  bg-gradient-to-r from-[#814ced] text-white to-[#3a1e70] hover:bg-gradient-to-r hover:from-[#3a1e70]to-[#814ced] h-10 w-10 rounded-full flex justify-center items-center">
                           <SiGmail className=" text-2xl text-white" />
                        </div>
                        <div className="text">
                            <p className=" text-[16px]">Email</p>
                            <p className=" text-[20px]">sheikhrakib883@gmail.com</p>
                        </div>
                    </div>
                    <div className="item flex items-center gap-4">
                        <div className=" cursor-pointer  bg-gradient-to-r from-[#814ced] text-white to-[#3a1e70] hover:bg-gradient-to-r hover:from-[#3a1e70]to-[#814ced] h-10 w-10 rounded-full flex justify-center items-center">
                           <FaLocationDot className=" text-2xl text-white" />
                        </div>
                        <div className="text">
                            <p className=" text-[16px]">Address</p>
                            <p className=" text-[20px]">Banani Dhaka</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Contact