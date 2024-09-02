
import Hero from '../Components/Hero-area/Hero';
import Protflio from '../Components/RecentWork/Protflio';
import About from '../Components/Qulity/About';
import Education from '../Components/Education/Education';
import Skill from '../Components/MySkill/Skill';
import Contact from '../Components/Contact/Contact';


const Home = () => {
    return (
        <div className="all-content">
            <div className="">
                <Hero></Hero>
                <About></About>
                <Protflio></Protflio>
                <Education></Education>
                <Skill></Skill>
                <Contact></Contact>
               
            </div>
        </div>
    );
};

export default Home;