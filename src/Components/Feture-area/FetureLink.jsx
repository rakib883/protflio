
const FetureLink = (props) => {
    const {icon,name,des,downIcon} = props.items;
    return (
    <div>
         <div className="content-wripper group cursor-pointer ">
            <div className="all-content rounded-xl  custom-shadaw p-2 mt-10">
                <div className="content-wripper m-5  overflow-hidden  ">
                    <div className="hover-content py-2 translate-y-10 group-hover:-translate-y-2 duration-300">
                           <div className="itens">
                                <div className="icon">{icon}</div>
                            </div>
                            <div className="name group-hover:text-[#ffff] py-5 text-[24px] font-sans text-[#C4CFDE]">
                                {name}
                            </div>
                            <div className="des group-hover:text-[#ffff] text-[16px]  font-sans text-[#C4CFDE] ">
                                {des}
                            </div>
                            <div className="down-icon mt-5">
                                {downIcon}
                            </div>
                    </div>
                </div>
            </div>
       </div>
    </div>
    
    );
};

export default FetureLink;