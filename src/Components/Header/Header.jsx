import { NavLink } from "react-router-dom";
import './Style.css'
const Header = () => {
    return (
        <div className="flex justify-between items-center max-w-6xl mx-auto mt-4">
            <div>
                <img src="/src/assets/Logo.png" alt="" />
            </div>
            <div >
                    <nav>
                    <ul className="flex gap-6 font-semibold"><li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/donation'>Donation</NavLink></li>
                    <li><NavLink to='/stat'>Statistics</NavLink></li></ul>
                    </nav>
            </div>
        </div>
    );
};

export default Header;