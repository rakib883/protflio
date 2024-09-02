import Title from "../../All UI/Title"
import { FaGraduationCap } from "react-icons/fa";
import { FaWpexplorer } from "react-icons/fa6";
const Education = () => {
  return (
    <div className=" bg-[#f6f3fc] my-20 ">
        <div className="content mx-4 py-10 md:flex  md:gap-20  gap-10">
            <div className="education w-full md:w-[50%]">
                <div className="title flex items-center gap-4">
                    <div className="icon">
                       <FaGraduationCap className=" text-6xl text-[#7343d4]" />
                    </div>
                    <Title title="My Education" />
                </div>
                <div className="content mt-8 flex flex-col gap-6">
                   <div className="education rounded-xl group cursor-pointer bg-white hover:bg-gradient-to-r hover:from-[#7e4ae7] hover:via-[#7e4ae7] via-50% hover:to-gray-600 t0-50% transition-all  duration-700">
                        <div className="item p-8">
                            <h1 className=" text-[20px] text-[#8750f7] group-hover:text-white font-semibold">S.S.C-2018</h1>
                            <h1 className=" group-hover:text-white text-[23px] font-semibold">Computer Information Technology</h1>
                            <h1 className=" text-[16px] group-hover:text-white">Batekamari High School,Gopalgonj</h1>
                        </div>
                    </div>
                    <div className="education rounded-xl group cursor-pointer bg-white hover:bg-gradient-to-r hover:from-[#7e4ae7] hover:via-[#7e4ae7] via-50% hover:to-gray-600 t0-50% transition-all  duration-700">
                        <div className="item p-8">
                            <h1 className=" text-[20px] text-[#8750f7] group-hover:text-white font-semibold">Diploma in Computer Engineering - 2023</h1>
                            <h1 className=" group-hover:text-white text-[23px] font-semibold">Computer Systems Technology</h1>
                            <h1 className=" text-[16px] group-hover:text-white">Faridpur Polytechnic Institute</h1>
                        </div>
                    </div>
                    <div className="education rounded-xl group cursor-pointer bg-white hover:bg-gradient-to-r hover:from-[#7e4ae7] hover:via-[#7e4ae7] via-50% hover:to-gray-600 t0-50% transition-all  duration-700">
                        <div className="item p-8">
                            <h1 className=" text-[20px] text-[#8750f7] group-hover:text-white font-semibold">Web Development-2024</h1>
                            <h1 className=" group-hover:text-white text-[23px] font-semibold">MERN Stack Development</h1>
                            <h1 className=" text-[16px] group-hover:text-white">People And Tec Institute of IT</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="education w-full  md:w-[50%]">
                <div className="title flex  items-center mt-10 md:mt-0 gap-4">
                    <div className="icon">
                       <FaWpexplorer className=" text-6xl text-[#7343d4]" />
                    </div>
                    <Title title="My Experience" />
                </div>
                <div className="no my-8 text-2xl bodyFont">
                    I have no  Experience
                </div>
                {/* <div className="content mt-8 flex flex-col gap-6">
                   <div className="education rounded-xl group cursor-pointer bg-white hover:bg-gradient-to-r hover:from-[#7e4ae7] hover:via-[#7e4ae7] via-50% hover:to-gray-600 t0-50% transition-all  duration-700">
                        <div className="item p-8">
                            <h1 className=" text-[20px] text-[#8750f7] group-hover:text-white font-semibold">S.S.C-2018</h1>
                            <h1 className=" group-hover:text-white text-[23px] font-semibold">Computer Information Technology</h1>
                            <h1 className=" text-[16px] group-hover:text-white">Batekamari High School,Gopalgonj</h1>
                        </div>
                    </div>
                    <div className="education rounded-xl group cursor-pointer bg-white hover:bg-gradient-to-r hover:from-[#7e4ae7] hover:via-[#7e4ae7] via-50% hover:to-gray-600 t0-50% transition-all  duration-700">
                        <div className="item p-8">
                            <h1 className=" text-[20px] text-[#8750f7] group-hover:text-white font-semibold">Diploma in Computer Engineering - 2023</h1>
                            <h1 className=" group-hover:text-white text-[23px] font-semibold">Computer Systems Technology</h1>
                            <h1 className=" text-[16px] group-hover:text-white">Faridpur Polytechnic Institute</h1>
                        </div>
                    </div>
                    <div className="education rounded-xl group cursor-pointer bg-white hover:bg-gradient-to-r hover:from-[#7e4ae7] hover:via-[#7e4ae7] via-50% hover:to-gray-600 t0-50% transition-all  duration-700">
                        <div className="item p-8">
                            <h1 className=" text-[20px] text-[#8750f7] group-hover:text-white font-semibold">Web Development-2024</h1>
                            <h1 className=" group-hover:text-white text-[23px] font-semibold">MERN Stack Development</h1>
                            <h1 className=" text-[16px] group-hover:text-white">People And Tec Institute of IT</h1>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Education