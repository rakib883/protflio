import { NavLink } from 'react-router-dom';
import "./Active.css"
const HeaderLink = (props) => {
const{name,path} = props.items;
    return (
        <div className="all-link text-[#C4CFDE]/80 px-4 uppercase font-mainFont text-[13px]">
            <NavLink
               to={path}>{name}
            </NavLink>
        </div>
    );
};

export default HeaderLink;