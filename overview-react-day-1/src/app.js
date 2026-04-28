import React from "react";
import ReactDOM from "react-dom/client";
import { UserRoundPen , Search, SquareDot, SquareMinus } from "lucide-react";

import Header from "./components/Header";
import Body from "./components/Body";

const root = ReactDOM.createRoot(document.getElementById('root'));        

const Footer = () => {
    return (
        <div className="footer"></div>
    );
};

const AppLayout = () => {
    return (
        <div>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}



root.render(<AppLayout/>);
