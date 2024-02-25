import React from 'react';

const Maintitle = (props,className) => {
    return (
        <div>
            <h1 className={`${props.className} text-[20px] lg:text-[60px]  text-[#C4CFDE] uppercase font-bold `}>{props.title}</h1>
        </div>
    );
};

export default Maintitle;