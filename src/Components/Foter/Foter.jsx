import React from 'react';
import Subtitle from '../../All UI/Subtitle';
import Maintitle from '../../All UI/Maintitle';
import Headerlink from './Headerlink';
import Education from './Education';
import Experience from './Experience';
import Border from '../../All UI/Border';
import { delay, motion } from "framer-motion"
import { useState } from 'react';

const Foter = () => {
    
    const [educaton,setEducation] = useState(true)
    const [skill,setSkill] = useState(false)
    const [myexperience,setMyExperience] = useState(false)
    const [interview,setInterview] = useState()
    const education = ()=>{
            setEducation(true)
            setSkill(false)
            myexperience(false)
            interview(false)
    }
  
    const profesonal =()=>{
        setEducation(false)
        setSkill(true)
        myexperience(false)
        interview(false)
    }





    const edication = [
        {
            title :"S.S.C",
            subtitle : "Batekamari High School",
            grade : "4.57/5",
            des : "Batekamari High School Muksudpur Gopalgonj"
        },
        {
            title :"Diploma in Engineering",
            subtitle : "Faridpur Polytechnic Institute,Faridpur",
            grade : "3.61/4",
            des : "Computer Science and technology"
        },
        
    ]
    const experience = [
        
    ]

    const progress =[
        {
            skill : "phottoshop",
            score : 80
        },
        {
            skill : "Figma",
            score : 60
        },
        {
            skill : "Adobe XD",
            score : 70
        },
        {
            skill : "illustrator",
            score : 50
        },
        {
            skill : "design",
            score : 90
        },
    ]

    const skillArea = [
        {
            name : "HTML",
            score : 90
        },

        {
            name : "CSS",
            score : 70
        },
        {
            name : "Javascprit",
            score : 50
        },
        {
            name : "Web design",
            score : 60
        },
        {
            name : "Web development",
            score : 40
        },
    ]
    return (
        <section name="resume" className=" ">
                <div className="content mx-[10px]">
                       {/* resume header area start */}
                            <div className="sub-title">
                                <Subtitle className="text-[13px] tracking-[3px] uppercase text-center" title = "I have no EXPERIENCE"></Subtitle>
                            </div>
                            <div className="main-title">
                                <Maintitle className="text-center font-mainFont " title="My Resume"></Maintitle>
                            </div>
                        <div className="content-wriper custom-shadaw mt-8 rounded-lg">
                                <div className=" custom-shadaw">
                                    <ul className="lg:flex lg:justify-between cursor-pointer ">
                                        <li onClick={education} className={`${educaton && 'text-[#FF014F]'} bg-gradient-to-r from-indigo-500/10  font-mainFont font-semibold text-[#C4CFDE] text-center  w-full py-6`}>Education</li>
                                        <li onClick={profesonal} className={`${skill && "text-[#FF014F] "}bg-gradient-to-r from-indigo-500/10   font-mainFont font-semibold text-[#C4CFDE] text-center w-full py-6`}>Professional Skill</li>
                                        <li className="bg-gradient-to-r from-indigo-500/10   font-mainFont font-semibold text-[#C4CFDE] text-center w-full py-6">Experience</li>
                                        <li className="bg-gradient-to-r from-indigo-500/10  font-mainFont font-semibold text-[#C4CFDE] text-center w-full py-6">Interview</li>
                                    </ul>
                                </div>
                        </div>
                        {/* resume-header-area end */}

                        {
                            educaton ?  
                            <motion.div
                              
                            
                        
                            
                            className="resume-content gap-14 grid  lg:grid-cols-2 md:grid-cols-2 mt-10">
                            <div className="education mx-[10px]">
                                <div className="subtitle">
                                    <Subtitle className="font-mainFont" title="1998 - 2010 "></Subtitle>
                                </div>
                                <div className="main-title">
                                    <h1 className="lg:text-[30px] font-mainFont font-bold md:text-[30px] text-[18px] text-[#C4CFDE]">Education Quality</h1>
                                </div>
                                <div className="esucation-content flex flex-col gap-8">
                                    {
                                        edication.map(items =><Education
                                        key = {items.title}
                                        items = {items}
                                        ></Education>) 
                                    }
                                </div>
                            </div>
                            <div className="job-experience mx-[10px] ">
                                     <div className="subtitle ">
                                        <Subtitle className="font-mainFont" title="2024-start study" ></Subtitle>
                                    </div>
                                    <div className="main-title">
                                        <h1 className="lg:text-[30px] font-mainFont font-bold md:text-[30px] text-[18px] text-[#C4CFDE]">Job Experience</h1>
                                    </div>
                                    <div className="experience-content flex flex-col gap-12 mt-6">
                                        {
                                            experience.map(items =><Experience
                                            key = {items.title}
                                            items ={items}
                                            ></Experience>)
                                        }
                                </div>
                                </div>
                        </motion.div> : ""
                        }
                       
                 {/* education area end */}

                 {
                    skill && 
                    <div className="professional-area mt-4 mx-2">
                       <div className="profesonal-content gap-10   lg:flex md:flex justify-between ">
                          <div className="design-skill lg:w-1/2 w-full ">
                            <div className="title-area">
                                <div className="subtitle">
                                    <Subtitle className="uppercase font-mainFont " title="Fetures"></Subtitle>
                                </div>
                                <div className="main-title">
                                    <h1 className="uppercase text-[30px] font-bold text-[#C4CFDE]">Design Skill</h1>
                                </div>
                            </div>
                            {/* photto shop area start */}
                            {
                                progress.map(items => <div key={items.name} className="main overflow-hidden my-6">
                                        <div className="all-content mt-4">
                                            <div className="title ">
                                                <p className="text-[#979FAC] font-mainFont font-semibold uppercase text-[14px]">{items.skill}</p>
                                            </div>
                                            <div className="progress-bars  relative">
                                                <div className="parent-progress bg-black/20 w-full h-2 mt-3 rounded-md"></div>
                                                <motion.div 
                                                  initial = {{x:-10, opacity:0}}
                                                  animate ={{x:0, opacity:1}}
                                                  transition={{delay:.3, duration:1.1}}
                                                  
                                                className={` bg-gradient-to-r from-cyan-200 to-cyan-500 h-2  absolute top-0 rounded-md`} style={{width:`${items.score}%`}}>
                                                    <span className="text-[#979FAC] right-0 bottom-4 absolute ">{items.score}%</span>
                                                </motion.div>
                                                
                                            </div>
                                        </div>

                                </div> )
                            }
                            
                          </div>
                     {/* photto shop area end */}
                     {/* skill decelopment area start */}
                          <div className="development-skill w-full lg:w-1/2">
                             <div className="development-title">
                                <div className="sub-title">
                                  <Subtitle className="uppercase font-mainFont " title="Fetures"></Subtitle>
                                </div>
                                <div className="main-title">
                                    <h1 className="uppercase text-[30px] font-bold text-[#C4CFDE]">delopment skill</h1>
                                </div>
                             </div>
                             <div className="development-skill-all-content w-full ">
                                <div className="all-content w-full">
                                   {
                                     skillArea.map(items => 
                                     <div key = {items.skill} className="all-skill-progress my-10">
                                        <div className="content mt-4">
                                            <p  className="text-[#979FAC]  font-mainFont w-full font-semibold uppercase text-[14px]">{items.name}</p>
                                            <div className="progress-area w-full mt-3  relative">
                                                <div className="main-bars  h-2 bg-black/20 rounded-md "></div>
                                                <div className="child-progress bg-gradient-to-r from-sky-400 to-slate-400 h-2  top-0 rounded-md absolute" style={{width:`${items.score}%`}}>
                                                  <span className="absolute bottom-4 right-0 text-[#979FAC]">{items.score}%</span>
                                                </div>
                                                 
                                            </div>
                                        </div>
                                     </div>)
                                   } 
                                </div>
                             </div>
                          </div>
                        {/* skill decelopment area end */}
                       </div>
                    </div>
                 }
                 
                 <motion.div
                  animate={{ y: 100 }}
                  transition={{ type: "spring", stiffness:0 }}
                 className="experience">
                    <p></p>
                 </motion.div>
                 <div className="intervew-area">
                    <p></p>
                 </div>
            </div>
            <Border></Border>
        </section>
    );
};

export default Foter;