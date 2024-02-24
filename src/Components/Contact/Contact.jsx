import React, { useState } from 'react';
import contacImage from '../../assets/contact1.png'
import Subtitle from '../../All UI/Subtitle';
import Maintitle from '../../All UI/Maintitle';
import { FiFacebook } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { FiLinkedin } from "react-icons/fi";

const Contact = () => {
    const [uservalue , setUservalue] = useState();
    const [userphone,setUserphone] = useState();
    const [usergmail,setUsergmail] = useState();
    const [usersub,setuseSubject] = useState();
    const [usertext , setUsertext] =  useState();
    const submitHandeler = ()=>{
        console.log(uservalue)
    }
    return (
        <div className="main-area ">
            <div className="title">
                <div className="subtitle">
                    <Subtitle className="text-center" title="CONTACT"></Subtitle>
                </div>
                <div className="main-title pb-4 ">
                    <Maintitle className="text-center text-[13px] " title="Contact With Me"></Maintitle>
                </div>
            </div>
            <div className="all-content grid md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center  ">
                <div className="">
                     <div className="custom-shadaw p-4 rounded-lg">
                        <div className="overflow-hidden  rounded-lg">
                            <img className="hover:scale-125 w-full duration-300 rounded-lg cursor-pointer" src={contacImage } alt="" />
                        </div>
                        <div className="des-area mx-2 flex mt-4  flex-col gap-5">
                           <h1 className="text-[29px] font-mainFont font-semibold text-[#C4CFDE]">Nevine Acotanza</h1>
                           <p className="text-[18px] text-[#878E99] font-mainFont">Chief Operating Officer</p>
                           <p className="text-[20px] font-mainFont text-[#878E99]">I am available for freelance work. Connect with me via and call in to my account</p>
                            <div className="phone-area text-[18px] font-mainFont text-[#878E99]">
                                <p>Phone : <span className="text-[#C4CFDE]">01728262111</span> </p>
                                <p>Email : <span className="text-[#C4CFDE]">sheikhrakib883@gmail.com</span> </p>
                            </div>
                            <p className="uppercase text-[18px] font-mainFont text-[#878E99]">find with me</p>
                         </div>
                         <div className="social-area flex gap-4 mt-4 pb-5">
                            <div className="face-book custom-shadaw p-2 hover:-translate-y-2 duration-300 cursor-pointer">
                               <FiFacebook className="h-9 w-9 text-[#C4CFDE] "/>
                            </div>
                            <div className="face-book custom-shadaw p-2 hover:-translate-y-2 duration-300 cursor-pointer">
                              <CiTwitter className="h-9 w-9 text-[#C4CFDE]"/>
                            </div>
                            <div className="face-book custom-shadaw p-2 hover:-translate-y-2 duration-300 cursor-pointer">
                              <FiLinkedin className="h-9 w-9 text-[#C4CFDE]"/>
                            </div>
                         </div>
                     </div>
                </div>
                <div className="form md:col-span-2 lg:col-span-2  ">
                    <div className="all-content custom-shadaw mt-3">
                        <div className="all-content mx-10">
                            <div className="phone-and-name-area flex justify-between gap-4">
                                <div className="phone w-full">
                                    <p className="text-[16px] uppercase text-[#C4CFDE]">Inter your name</p>
                                 <input onChange={(e) =>setUservalue(e.target.value)} value={uservalue}  className="bg-[#191B1E] border-2  mt-1  text-[#C4CFDE] rounded-sm font-mainFont outline-none border-[black] focus-within:border-[#E11D48] duration-300 py-3 w-full px-2" placeholder="Inter your name" type="text" />
                                </div>
                                <div className="name-area w-full">
                                    <p className="text-[16px] uppercase text-[#C4CFDE]">Inter your number</p>
                                    <input onChange={(e) =>setUserphone(e.target.value)} value={userphone}  className="bg-[#191B1E] border-2 mt-1  text-[#C4CFDE] rounded-sm font-mainFont outline-none border-[black] focus-within:border-[#E11D48] duration-300 py-3 w-full px-2" placeholder="Inter your number" type="gmail" /> 
                                </div>
                            </div>
                            <div className="gmail mt-4">
                                <div className="name-area w-full">
                                    <p className="text-[16px] uppercase text-[#C4CFDE]">Inter your Gmail</p>
                                    <input onClick={(e) =>setUsergmail(e.target.value)} value={usergmail} className="bg-[#191B1E] border-2    mt-1  text-[#C4CFDE] rounded-sm font-mainFont outline-none border-[black] focus-within:border-[#E11D48] duration-300 py-3 w-full px-2" placeholder="Inter your gmail" type="gmail" /> 
                                </div>
                            </div>
                            <div className="gmail mt-4">
                                <div className="name-area w-full">
                                    <p className="text-[16px] uppercase text-[#C4CFDE]">Inter your subject</p>
                                    <input onChange={(e) =>setuseSubject(e.target.value)} value={usersub}  className="bg-[#191B1E] border-2    mt-1 text-[#C4CFDE] rounded-sm font-mainFont outline-none border-[black] focus-within:border-[#E11D48] duration-300 py-3 w-full px-2" placeholder="Inter your subject" type="gmail" /> 
                                </div>
                                <div className="gmail mt-4">
                                <div className="name-area w-full">
                                    <p className="text-[16px] uppercase text-[#C4CFDE]">Inter your message</p>
                                    <textarea onChange={(e) =>setUsertext(e.target.value)} value={usertext} className="w-full bg-[#191B1E] border-2 border-[black] focus-within:border-[#E11D48] mt-1  text-[#C4CFDE] rounded-sm font-mainFont outline-none  duration-300 py-3 px-2" placeholder="Inter your subject" name="" id="" cols="" rows="10"></textarea>
                                </div>
                                <div onClick={submitHandeler} className="text-center py-2 cursor-pointer mt-5 uppercase font-mainFont bg-[green]">Send message</div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;