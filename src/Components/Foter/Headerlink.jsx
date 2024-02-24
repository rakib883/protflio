import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
const Headerlink = (props) => {
    const {name} = props.items
     
    return (
        <div  className={`w-full  group hover:bg-black/10 rounded-lg  flex justify-center cursor-pointer ` }>
          <NavLink
                 className={({ isActive}) =>isActive ? "active": ""}
            >
             <p   className="text-center py-8   group-hover:text-[#CD0946] duration-300 text-[#C4CFDE] font-medium   text-[18px]">{name}</p>
          </NavLink>
        </div>
    );
};

export default Headerlink;