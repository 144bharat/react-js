import { ShoppingCart } from 'lucide-react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router';
import useOnlineStatus from '../utils/useOnlineStatus';
const Header = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header not-dark:bg-orange-200 bg-olive-950 flex justify-between items-center px-5 shadow-lg not-dark:text-olive-950 text-white font-semibold">
      <div className="logoContainer">
        <img className="logo w-20 rounded-full" src={LOGO_URL} />
      </div>
      <ul className="navItems flex">
        <li className="px-5 hover:not-dark:text-white hover:underline decoration-dashed">
          <Link to="/">Home</Link>
        </li>
        <li className="px-5 hover:not-dark:text-white hover:underline decoration-dashed">
          <Link to="/about">About Us</Link>
        </li>
        <li className="px-5 hover:not-dark:text-white hover:underline decoration-dashed">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="px-5 hover:not-dark:text-rose-400">
          <ShoppingCart />
        </li>
        <li className="px-5 hover:not-dark:text-white hover:underline decoration-dashed">
          <Link to="/grocery">Grocery</Link>
        </li>
        <li className="px-5">Status: {onlineStatus ? `🟢` : `🔴`}</li>
      </ul>
      <div className="userProfile">
        {/* will use this if user logged in: <UserRoundPen/> */}
        Sign-up / log-in
      </div>
    </div>
  );
};

export default Header;
