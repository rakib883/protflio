import React from 'react';

const Subtitle = (props,className) => {
    return (
        <div>
            <p className={`text-[#CA0845] font-mainFont tracking-[1px] ${props.className}`}>{props.title}</p>
        </div>
    );
};

export default Subtitle;