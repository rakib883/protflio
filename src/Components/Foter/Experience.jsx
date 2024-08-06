import React from 'react';

const Experience = (props) => {
    const {title,sibtitle,state,des} = props.items
    return (
        <div>
            <div className="header-area py-12 custom-shadaw rounded-lg ">
               <div className="all-content mx-10 cursor-pointer">
                <div className="all-content flex justify-between items-center  ">
                    <div className="title-area">
                        <div className="title text-[24px] font-sans text-[#C4CFDE]">{title}</div>
                        <div className="subtitle text-[14px] mt-1 font-sans text-[#878E99]">{sibtitle}</div>
                    </div>
                    <div className="state button-area custom-shadaw font-sans text-[14px]  px-3 py-2 rounded-sm text-[#FF014F]">{state}</div>
                </div>
                <div className="bg-[black] w-full h-[1px] my-10"></div>
                <div className="des text-[18px] text-[#878E99] font-sans leading-[28px]">{des}</div>
               </div>
            </div>
        </div>
    );
};

export default Experience;