import Title from "../../All UI/Title";
import { FaFigma } from "react-icons/fa";
import { GrJs } from "react-icons/gr";
import { FaReact } from "react-icons/fa";
import { SiAdobexd } from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io5";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";

const Skill = () => {
  const skill = [
    {
      id: 1,
      name: "HTML",
      icon: <IoLogoHtml5 className="text-[#dd4b25] text-6xl" />, // Directly use the component
      work: "80%",
    },
    {
      id: 2,
      name: "JavaScript",
      icon: <GrJs className="text-yellow-400 text-6xl" />,
      work: "50%",
    },
    {
      id: 3,
      name: "React",
      icon: <FaReact className="text-[#00d1f7] text-6xl" />,
      work: "80%",
    },
    {
      id: 4,
      name: "Tailwind CSS",
      icon: <BiLogoTailwindCss className="text-[#31b8f7] text-6xl" />,
      work: "60%",
    },
    {
      id: 5,
      name: "Next.js",
      icon: <SiNextdotjs className="text-[#000000] text-6xl" />,
      work: "50%",
    },
    {
      id: 6,
      name: "Figma",
      icon: <FaFigma className="text-6xl" />,
      work: "50%",
    },
    {
      id: 7,
      name: "Adobe XD",
      icon: <SiAdobexd className="text-6xl" />,
      work: "20%",
    },
  ];

  return (
    <div>
      <div className="content mb-20">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 2 } }}
          className="title text-center"
        >
          <Title title="My Skills" />
          <div className="max-w-lg mx-auto my-4">
            <p className="text-[16px] text-[#140c1d] mx-8">
              We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
            </p>
          </div>
        </motion.div>
        <div className="skill-area mt-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 2 } }}
            className=" grid grid-cols-2 md:grid-cols-4 gap-4 lg:grid-cols-7"
          >
            {skill.map((item) => (
              <div key={item.id} className="item  flex justify-center items-center flex-col">
                <div className="content group h-[150px] w-[150px] ">
                  <div className="image bg-[#f6f3fc] hover:bg-[#321963] cursor-pointer duration-300 py-6 rounded-2xl flex flex-col justify-center items-center">
                    {item.icon} {/* Render the icon component here */}
                    <p className="text-[#747779] font-semibold mt-4 group-hover:text-white">{item.work}</p>
                  </div>
                </div>
                <p className="text-[16px] text-center mt-2 text-[#804ceb]">{item.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
