import React from 'react';
import Subtitle from '../../All UI/Subtitle';
import Maintitle from '../../All UI/Maintitle';
import Headerlink from './Headerlink';
import Education from './Education';
import Experience from './Experience';
import Border from '../../All UI/Border';

const Foter = () => {
    const cvheader = [
        {
            name : "Education"
        },
        {
            name : "Professional skill"
        },
        {
            name : "Experience"
        },
        {
            name : "Interview"
        }
    ];
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
    return (
        <div className=" ">
            <div className="content">
                <div className="sub-title">
                    <Subtitle className="text-[13px] tracking-[3px] uppercase text-center" title = "7+ YEARS OF EXPERIENCE"></Subtitle>
                </div>
                <div className="main-title">
                    <Maintitle className="text-center font-mainFont " title="My Resume"></Maintitle>
                </div>
               <div className="content-wriper custom-shadaw mt-8 rounded-lg">
                <div className="resume-header md:flex md:justify-between lg:flex lg:justify-between ">
                        {
                            cvheader.map(items =><Headerlink
                            key = {items.name}
                            items = {items}
                            ></Headerlink>)
                        }
                    </div>
               </div>
               <div className="resume-content gap-10 grid lg:grid-cols-2 md:grid-cols-2 mt-10">
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
               </div>
            </div>
            <Border></Border>
        </div>
    );
};

export default Foter;