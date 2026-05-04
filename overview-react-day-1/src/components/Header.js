import { ShoppingCart } from "lucide-react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

const Header = () => {
    return (
        <div className="header">
            <div className="logoContainer">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <ul className="navItems">
                <li><Link to="/">Home</Link></li>
                <li ><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><ShoppingCart/></li>
            </ul>
            <div className="userProfile">
                {/* will use this if user logged in: <UserRoundPen/> */}
                Sign-up / log-in
                </div>
        </div>
    );
};

export default Header;