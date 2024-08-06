import React from 'react';
import Border from '../../All UI/Border';

const Education = (props) => {
    const {title, subtitle,grade,des  } = props.items;
    return (
        <div className="wripper custom-shadaw py-12 cursor-pointer mt-6 rounded-lg">
            <div className="all-conet mx-10">
               <div className="title-area flex items-center justify-between">
                  <div className="title">
                    <h1 className="lg:text-[24px] text-[20px]  font-sans text-[#C4CFDE]">{title}</h1>
                    <h1 className="text-[14px] mt-1 font-sans text-[#878E99]">{ subtitle }</h1>
                  </div>
                   <div className="button-area custom-shadaw font-sans text-[14px]  px-3 py-2 rounded-sm text-[#FF014F]">{grade }</div>
               </div>
                 <div className="bg-[black] w-full h-[1px] my-10"></div>
                 <p className="text-[18px] text-[#878E99] font-sans leading-[28px]">{des}</p>
            </div>
        </div>
    );
};

export default Education;123