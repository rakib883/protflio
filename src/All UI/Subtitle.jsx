import React from 'react';

const Subtitle = (props,className) => {
    return (
        <div>
            <p className={`text-[#CA0845] font-sans tracking-[1px] ${props.className}`}>{props.title}</p>
        </div>
    );
};

export default Subtitle;