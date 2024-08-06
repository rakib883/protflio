
import Subtitle from '../../All UI/Subtitle';
import Maintitle from '../../All UI/Maintitle';
import firstImage from '../../assets/first.png' 
import amajhon from '../../assets/amajhon.png'   
import newbazar from '../../assets/nwebazar.png'   
import { RiWindowsLine } from "react-icons/ri";   
import { CiHeart } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";
import { MdOutlineVideocam } from "react-icons/md";
import { BsBoxArrowUpRight } from "react-icons/bs";
import ProtfulioLink from './ProtfulioLink';
import Border from '../../All UI/Border';

const Protflio = () => {
    const protflio =[
        {
            pic :firstImage,
            live:"https://shop-z3aw.vercel.app/",
            repo:"https://github.com/rakib883/protflio.git",
            topIcon : <RiWindowsLine className="w-5 h-5 font-bold text-[#3B3A47]" />,
            type : "Shop",
            heart : <CiHeart className="text-[]"/>,
            des :"E-Comarch web templete using React js",
            arrow : <MdArrowOutward />,
        },
        {
            pic :amajhon,
            live:"https://newamajhon.vercel.app/",
            repo:"https://github.com/rakib883/newamajhon.git",
            topIcon :<MdOutlineVideocam className="w-5 h-5 text-[#3B3A47]"/>,
            type : "BuyNow.com",
            heart : <CiHeart />,
            des :"E-Comarch web templete Using Next.js",
            arrow : <MdArrowOutward />,
        },
        {
            pic :newbazar,
            live:"https://newbazar.vercel.app/",
            repo:"https://github.com/rakib883/bazar.git",
            topIcon : <BsBoxArrowUpRight className="w-5 h-5 text-[#3B3A47]"/>,
            type : "Bazar",
            heart : <CiHeart />,
            des :"E-Comarch web templete ReduxTolkit state Management",
            arrow : <MdArrowOutward />,
        },
        {
            pic :firstImage,
            live:"https://vercel.com/rakib883s-projects/shop-z3aw/9wTh6Hng9iELT8AkFaCe8Fkm9zn4",
            repo:"https://github.com/rakib883/protflio.git",
            topIcon : <RiWindowsLine className="w-5 h-5 text-[#3B3A47]"/>,
            type : "game",
            heart : <CiHeart />,
            des :"work out web site design and development.",
            arrow : <MdArrowOutward />,
        },
        {
            pic :firstImage,
            live:"https://vercel.com/rakib883s-projects/shop-z3aw/9wTh6Hng9iELT8AkFaCe8Fkm9zn4",
            repo:"https://github.com/rakib883/protflio.git",
            topIcon : <RiWindowsLine className="w-5 h-5 text-[#3B3A47]"/>,
            type : "Gallery",
            heart : <CiHeart />,
            des :"mobile app aplaction landing design and development",
            arrow :<MdArrowOutward />,
        },
        {
            pic :firstImage,
            live:"https://vercel.com/rakib883s-projects/shop-z3aw/9wTh6Hng9iELT8AkFaCe8Fkm9zn4",
            repo:"https://github.com/rakib883/protflio.git",
            topIcon : <RiWindowsLine className="w-5 h-5 text-[#3B3A47]"/>,
            type : "Stardant",
            heart : <CiHeart />,
            des :"restuenrt app  design and and mobile applaction",
            arrow : <MdArrowOutward />,
        },
    ]
    return (
        <section name="Protflio" className="main">
            <div className="sub-title">
                <Subtitle className="uppercase text-center font-sans text-[14px]" title="visit my portfolio and keep your feedback visit"></Subtitle>
            </div>
            <div className="main-title">
                <Maintitle className="text-center uppercase font-sans" title="My Portfolio"></Maintitle>
            </div>
            <div className="main-content mt-8 mx-[10px]">
                <div className="content grid grid-cols-1 md:lg:grid-cols-3 md:grid-cols-3 gap-5">
                   {
                    protflio.map(items =><ProtfulioLink
                      key = {items.icon}
                      items = {items}
                    ></ProtfulioLink>)
                   }
                </div>
            </div>
          <Border></Border>
        </section>
    );
};

export default Protflio;