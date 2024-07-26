import React from 'react';
import Subtitle from '../../All UI/Subtitle';
import Maintitle from '../../All UI/Maintitle';

const About = () => {
    return (
        <section name="about">
            <div className="main-area">
                <div className="title-area">
                    {/* <div className="subtitle text-center"><Subtitle title="About us"></Subtitle></div> */}
                </div>
                <div className="main-title text-center">
                    <Maintitle title="About me"></Maintitle>
                </div>
                <p className=" px-50 text-white">
                   <div className="all-image">
                   As a React js developer. My expertise in front-end   development, enabling me to create user-friendly and responsive web applications using React and Next js its associated ecosystem. Beyond my technical proficiency, I am known for my strong communication skills and ability to collaborate effectively within a team. I am passionate about continuous growth as a developer and eagerly seek opportunities to make meaningful contributions to projects and teams. 
                   </div>
                </p>
            </div>
        </section>
    );
};

export default About;