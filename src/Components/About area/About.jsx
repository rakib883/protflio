import React from 'react';
import Subtitle from '../../All UI/Subtitle';
import Maintitle from '../../All UI/Maintitle';

const About = () => {
    return (
        <section name="about">
            <div className="main-area">
                <div className="title-area">
                    <div className="subtitle text-center"><Subtitle title="About us"></Subtitle></div>
                </div>
                <div className="main-title text-center">
                    <Maintitle title="see our project"></Maintitle>
                </div>
                <p className="text-center px-50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ducimus odio quod animi provident aliquam
                     repellendus doloremque voluptatibus perspiciatis nam.
                </p>
            </div>
        </section>
    );
};

export default About;