
const Button = (props , className) => {
    return (
        <div>
            <button className={`text-[#FF014F] font-sans custom-shadaw hover:-translate-y-1 duration-300  font-semibold  ${props.className}`}>{props.title}</button>
           
        </div>
        
    );
};

export default Button;