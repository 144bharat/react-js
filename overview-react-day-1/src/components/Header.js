import { ShoppingCart } from "lucide-react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
        <div className="header">
            <div className="logoContainer">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <ul className="navItems">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
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