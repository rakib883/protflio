import { FaCode } from "react-icons/fa";
const ProtfulioLink = (props) => {
    const {pic,topIcon,des,type,heart,arrow,live,repo  } = props.items;
   
    return (
        <div className="custom-shadaw rounded-lg  cursor-pointer bg-[#f6f3fc] bodyFont">
           <div className="image-area relative  m-6 overflow-hidden max-h-52">
               <a href={live}>
                 <img className="hover:scale-y-125 duration-300 cursor-pointer rounded-lg" src={pic} alt="" />
               </a>
               <div className="overlay-icon top-3  absolute right-3">
                  {topIcon }
               </div>
           </div>
           <div className="all-ses mx-6 mt-2">
             <div className="icon mt-5 flex items-center justify-between">
                  <p className="text-[#844ef2]  uppercase bodyFont">{type}</p>
                 <a href={repo}>
                    <div className="code h-8 w-8 hover:bg-[#844ef2] border-[#844ef2] border-[1px] group flex justify-center items-center rounded-full">
                        <FaCode className=" text-[#844ef2] group-hover:text-black duration-300  " />
                    </div>
                 </a>
              </div>
            
            <div className="title mt-2 group pb-4">
                <h1 className="md:text-[24px] text-[16px] font-sans hover:text-black  relative overflow-hidden text-[#844ef2] duration-300 bodyFont ">{des} <span className="absolute bottom-[3px] translate-y-6 group-hover:translate-x-1 -translate-x-6 group-hover:-translate-y-1 duration-300 ml-2">{arrow}</span>  </h1>
            </div>
           </div>
        </div>
    );
};

export default ProtfulioLink;