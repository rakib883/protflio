import React, { useState } from 'react';
import contacImage from '../../assets/contact1.png'
import Subtitle from '../../All UI/Subtitle';
import Maintitle from '../../All UI/Maintitle';
import { FiFacebook } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { FiLinkedin } from "react-icons/fi";
import  toast, { Toaster } from 'react-hot-toast';
import axios, {isCancel, AxiosError} from 'axios';

const Contact = () => {
    const [uservalue , setUservalue] = useState("");
    const [userphone,setUserphone] = useState("");
    const [usergmail , setUserGmail] = useState("")
    const [usersub,setuseSubject] = useState("");
    const [usertext , setUsertext] =  useState("");
    const [loading , setLoading] = useState(false);
    const [success ,setSucess] = useState(false)
    const submitHandeler = ()=>{
        if(uservalue === ""){
            toast.error("inter your name")   
        }else if(userphone === ""){
            toast.error("Inter your phone")
        }else if(usergmail === ""){
            toast.error("Inter your gmail")
        }else if(usersub === ""){
            toast.error("inter your gmail")
        }else if(usertext === ""){
            toast.error("inter your text")
        }else{
            setLoading(true)
            axios.post("https://getform.io/f/5eV4BWbE", {
                uservalue,userphone,usergmail,usersub,usertext 
            }).then(res =>{
               if(res ?.status === 200){
                 setLoading(false)
                 setSucess(true)
                 
               }else{
                toast.success("wrong")
               }
            })
        }
    }
    return (
        <section name="Contact" className="main-area ">
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
                           <h1 className="text-[29px] font-mainFont font-semibold text-[#C4CFDE]">Rakib Sheikh</h1>
                           <p className="text-[18px] text-[#878E99] font-mainFont">Front-end Web developer</p>
                           <p className="text-[20px] font-mainFont text-[#878E99]">I am available for <span className="text-green-600"><a href="https://www.linkedin.com/in/rakib883/">Linkdin</a></span>. Connect with me via and call in to my account</p>
                            <div className="phone-area text-[18px] font-mainFont text-[#878E99]">
                                <p>Phone : <span className="text-[#C4CFDE]">01728262111</span> </p>
                                <p>Email : <span className="text-[#C4CFDE]">sheikhrakib883@gmail.com</span> </p>
                            </div>
                            <p className="uppercase text-[18px] font-mainFont text-[#878E99]">find with me</p>
                         </div>
                         <div className="social-area flex gap-4 mt-4 pb-5">
                            <a href="https://www.facebook.com/mdrakibshik.rakib" className="face-book custom-shadaw p-2 hover:-translate-y-2 duration-300 cursor-pointer">
                               <FiFacebook className="h-9 w-9 text-[#C4CFDE] "/>
                            </a>
                            <div className="face-book custom-shadaw p-2 hover:-translate-y-2 duration-300 cursor-pointer">
                              <CiTwitter className="h-9 w-9 text-[#C4CFDE]"/>
                            </div>
                            <a href="https://www.linkedin.com/in/rakib883/" className="face-book custom-shadaw p-2 hover:-translate-y-2 duration-300 cursor-pointer">
                              <FiLinkedin className="h-9 w-9 text-[#C4CFDE]"/>
                            </a>
                         </div>
                     </div>
                </div>
                <div className="form md:col-span-2 lg:col-span-2  ">
                   
                  {
                    loading ? <h1 className="text-[green] text-[24px] h-full flex justify-center items-center">
                    Your message sending..............
                            </h1>  :         
                    <div className="all-content custom-shadaw mt-3">
                        <div className="all-content mx-10">
                            <div className="phone-and-name-area flex justify-between gap-4">
                                <div className="phone w-full">
                                    <p className="text-[16px] uppercase text-[#C4CFDE]">Inter your name</p>
                                 <input onChange={(e) =>setUservalue(e.target.value)} value={uservalue}  className="bg-[#191B1E] border-2  mt-1  text-[#C4CFDE] rounded-sm font-mainFont outline-none border-[black] focus-within:border-[#E11D48] duration-300 py-3 w-full px-2" placeholder="Inter your name" type="text" />
                                </div>
                                <div className="name-area w-full">
                                    <p className="text-[16px] uppercase text-[#C4CFDE]">Inter your number</p>
                                    <input type="number" onChange={(e) =>setUserphone(e.target.value)} maxLength={11} value={userphone}  className="bg-[#191B1E] border-2 mt-1  text-[#C4CFDE] rounded-sm font-mainFont outline-none border-[black] focus-within:border-[#E11D48] duration-300 py-3 w-full px-2" placeholder="Inter your number"  /> 
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="name-area w-full">
                                    <p className="text-[16px] uppercase text-[#C4CFDE]">Inter your Gmail</p>
                                    <input onChange={(e) =>setUserGmail(e.target.value)}  value={usergmail}  className="bg-[#191B1E] border-2 mt-1  text-[#C4CFDE] rounded-sm font-mainFont outline-none border-[black] focus-within:border-[#E11D48] duration-300 py-3 w-full px-2" placeholder="Inter your number" type="email"  /> 
                                </div>
                            </div>
                            <div className=" mt-4">
                                <div className="name-area w-full">
                                    <p className="text-[16px] uppercase text-[#C4CFDE]">Inter your subject</p>
                                    <input onChange={(e) =>setuseSubject(e.target.value)} value={usersub}   className="bg-[#191B1E] border-2 mt-1 text-[#C4CFDE] rounded-sm font-mainFont outline-none border-[black] focus-within:border-[#E11D48] duration-300 py-3 w-full px-2" placeholder="Inter your subject" type="text" /> 
                                </div>
                                <div className="mt-4">
                                <div className="name-area w-full">
                                    <p className="text-[16px] uppercase text-[#C4CFDE]">Inter your message</p>
                                    <textarea onChange={(e) =>setUsertext(e.target.value)} value={usertext} className="w-full bg-[#191B1E] border-2 border-[black] focus-within:border-[#E11D48] mt-1  text-[#C4CFDE] rounded-sm font-mainFont outline-none  duration-300 py-3 px-2" placeholder="Inter your subject" name="" id="" cols="" rows="10"></textarea>
                                </div>
                                <button onClick={submitHandeler} className="text-center border border-[black] duration-300 w-full text-[white] focus-within:border-[#E11D48] py-2 cursor-pointer mt-5 uppercase font-mainFont bg-[#212428]">Send message</button>
                                <Toaster />
                            </div>
                            </div>
                        </div>
                    </div>
                    }
                    {
                      !loading  &&  success && <h1 className="text-[green] text-[20px] flex h-full justify-center items-center">Thanks for feedback</h1>
                    }
                </div>
            </div>
        </section>
    );
};

export default Contact;