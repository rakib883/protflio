import React, { useState } from 'react';

const ProtfulioLink = (props) => {
    const {pic,topIcon,des,type,heart,arrow  } = props.items;
    const [reactCounter , setReact] = useState(0)
    const reactCount = () =>{
        setReact(count => count + 1) 
    }
    return (
        <div className="custom-shadaw rounded-lg  cursor-pointer">
           <div className="image-area relative  m-6 overflow-hidden">
              <img className="hover:scale-110 duration-300 cursor-pointer rounded-lg" src={pic} alt="" />
               <div className="overlay-icon top-3  absolute right-3">
                  {topIcon }
               </div>
           </div>
           <div className="all-ses mx-6 mt-2">
             <div className="icon mt-5 flex items-center justify-between">
                  <p className="text-[#CA0845]  uppercase">{type}</p>
                  <button onClick={reactCount} className="hover:bg-[#131518] group text-[#C4CFDE] duration-300 px-2 py-1 rounded-sm flex items-center gap-1 justify-center"><p className="text-[#C4CFDE] group-hover:text-[#CA1630]">{heart}</p>{reactCounter }</button>
              </div>
            
            <div className="title mt-2 group pb-4">
                <h1 className="text-[24px] font-mainFont text-[#C4CFDE] relative overflow-hidden hover:text-[#FF014F] duration-300 ">{des} <span className="absolute bottom-[3px] translate-y-6 group-hover:translate-x-1 -translate-x-6 group-hover:-translate-y-1 duration-300 ml-2">{arrow}</span>  </h1>
            </div>
           </div>
        </div>
    );
};

export default ProtfulioLink;