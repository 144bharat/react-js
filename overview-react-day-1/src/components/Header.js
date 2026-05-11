import { ShoppingCart } from "lucide-react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const onlineStatus = useOnlineStatus();
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
                <li><Link to="/grocery">Grocery</Link></li>
                <li>Status: {(onlineStatus)?`🟢`:`🔴`}</li>
            </ul>
            <div className="userProfile">
                {/* will use this if user logged in: <UserRoundPen/> */}
                Sign-up / log-in
                </div>
        </div>
    );
};

export default Header;