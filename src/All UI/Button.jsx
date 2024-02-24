import React from 'react';

const Button = (props , className) => {
    return (
        <div>
            <button className={`text-[#FF014F] custom-shadaw hover:-translate-y-1 duration-300 font-mainFont  ${props.className}`}>{props.title}</button>
           
        </div>
        
    );
};

export default Button;