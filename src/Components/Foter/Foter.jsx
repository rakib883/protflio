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
    // const cvheader = [
    //     {
    //         name : "Education"
    //     },
    //     {
    //         name : "Professional skill"
    //     },
    //     {
    //         name : "Experience"
    //     },
    //     {
    //         name : "Interview"
    //     }
    // ];
    const [educaton,setEducation] = useState(true)
    const [skill,setSkill] = useState(false)
    const [myexperience,setMyExperience] = useState(false)
    const [interview,setInterview] = useState()
    const education = ()=>{
            setEducation(true)
            skill(false)
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
            title :"BSc in Computer Science",
            subtitle : "University of DVI (2006 - 2010)",
            grade : "3.54/4",
            des : "The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
        },
        {
            title :"AS - Science & Information",
            subtitle : "SuperKing College (2001 - 2005)",
            grade : "4.00/5",
            des : "Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
        },
        {
            title :"Secondary School Education",
            subtitle : "Kingstar Secondary School (1998 - 2000)",
            grade : "3.64/4",
            des : "Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
        },   
    ]
    const experience = [
        {
            title: "Sr. Software Engineer",
            sibtitle : "Google Out Tech - (2017 - Present)",
            state : "USA",
            des : "Google’s hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
        },
        {
            title: "Web Developer & Trainer",
            sibtitle : "Apple Developer Team - (2012 - 2016)",
            state : "MALAYSIA",
            des : "A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
        },
        {
            title: "Front-end Developer",
            sibtitle : "Nike - (2020 - 2011)",
            state : "india",
            des : "The India economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
        },
    ]

    const progress =[
        {
            skill : "phottoshop",
            score : "80"
        },
        {
            skill : "Figma",
            score : "60"
        },
        {
            skill : "Adobe XD",
            score : "70"
        },
        {
            skill : "illustrator",
            score : "50"
        },
        {
            skill : "design",
            score : "90"
        },
    ]
    return (
        <div className="lg:mx-[60px] md:mx-[60px] ">
                <div className="content">
                       {/* resume header area start */}
                            <div className="sub-title">
                                <Subtitle className="text-[13px] tracking-[3px] uppercase text-center" title = "7+ YEARS OF EXPERIENCE"></Subtitle>
                            </div>
                            <div className="main-title">
                                <Maintitle className="text-center font-mainFont " title="My Resume"></Maintitle>
                            </div>
                        <div className="content-wriper custom-shadaw mt-8 rounded-lg">
                                <div className=" custom-shadaw">
                                    <ul className="lg:flex lg:justify-between cursor-pointer ">
                                        <li onClick={education} className={`${educaton && 'text-[#FF014F]'} bg-gradient-to-r from-indigo-500/10  font-mainFont font-semibold text-[#C4CFDE] text-center  w-full py-6`}>Education</li>
                                        <li onClick={profesonal} className="bg-gradient-to-r from-indigo-500/10   font-mainFont font-semibold text-[#C4CFDE] text-center w-full py-6">Professional Skill</li>
                                        <li className="bg-gradient-to-r from-indigo-500/10   font-mainFont font-semibold text-[#C4CFDE] text-center w-full py-6">Experience</li>
                                        <li className="bg-gradient-to-r from-indigo-500/10  font-mainFont font-semibold text-[#C4CFDE] text-center w-full py-6">Interview</li>
                                    </ul>
                                </div>
                        </div>
                        {/* resume-header-area end */}

                        {
                            educaton ?  
                            <motion.div
                              
                            
                        
                            
                            className="resume-content gap-10 grid lg:grid-cols-2 md:grid-cols-2 mt-10">
                            <div className="education">
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
                            <div className="job-experience ">
                                <div className="subtitle">
                                        <Subtitle className="font-mainFont" title="2010-2018" ></Subtitle>
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
                    skill ? 
                    <div className="professional-area mt-4">
                       <div className="profesonal-content lg:flex md:flex justify-between ">
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
                                progress.map(items => <div key={items.name} className="main overflow-hidden">
                                        <div className="all-content my-4 ">
                                            <div className="title mt-3">
                                                <p className="text-[#979FAC] font-mainFont font-semibold uppercase text-[14px]">{items.skill}</p>
                                            </div>
                                            <div className="progress-bars mt-2 relative">
                                                <div className="parent-progress bg-black/20 w-full h-2 rounded-md"></div>
                                                <motion.div 
                                                  initial = {{x:-10, opacity:0}}
                                                  animate ={{x:0, opacity:1}}
                                                  transition={{delay:.3, duration:.1}}
                                                className={`${" "} bg-gradient-to-r from-cyan-200 to-cyan-500 h-2 w-[90%] absolute top-0 rounded-md`}>
                                                    <span className="text-[#979FAC] right-0 bottom-4 absolute ">{items.score}%</span>
                                                </motion.div>
                                                
                                            </div>
                                        </div>

                                </div> )
                            }
                            
                             {/* photto shop area end */}
                          </div>
                          <div className="development-skill w-1/2">development</div>
                       </div>
                    </div> : ""
                 }
                 
                 <motion.div
                  animate={{ y: 100 }}
                  transition={{ type: "spring", stiffness:0 }}
                 className="experience">
                    <p>this is profesonal skill</p>
                 </motion.div>
                 <div className="intervew-area">
                    <p>interview area</p>
                 </div>
            </div>
            <Border></Border>
        </div>
    );
};

export default Foter;