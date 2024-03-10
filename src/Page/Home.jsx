import React from 'react';
import Hero from '../Components/Hero-area/Hero';
import Feture from '../Components/Feture-area/Feture';
import Protflio from '../Components/Protflio/Protflio';
import Foter from '../Components/Foter/Foter';
import Contact from '../Components/Contact/Contact';
import About from '../Components/About area/About';


const Home = () => {
    return (
        <div className="all-content">
            <div className="lg:mx-[60px] mx-[1px]">
                <Hero></Hero>
                <About></About>
                <Feture></Feture>
                <Protflio></Protflio>
                <Foter></Foter>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;