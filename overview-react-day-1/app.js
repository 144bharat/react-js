import React from "react";
import ReactDOM from "react-dom/client";
import { UserRoundPen , ShoppingCart } from "lucide-react";

const root = ReactDOM.createRoot(document.getElementById('root'));        

/*
//THIS IS MY REACT ELEMENT
const h1 = React.createElement(
    "h1",
    {id:"h1tag"},
    "I am the text inside h1 bharat"
);

//THIS IS JSX
const jsxh1 = (<h1>i am text inside jsx updated</h1>);


//JSX (this is not html but kind of same in look) --> parcel (Pass JSX to Babel) --> Babel --> React Element changed (by babel) --> rendered on root.

// A Component --> Function --> Returns --> JSX.

const HeadComponent = () =>{
    return (
        <div>
            {//COMPONENT INSIDE COMPONENT IS CALLED "COMPONENT COMPOSITION"}
            <TitleComponent/>
            <h1>This heading is special and coming from header component.</h1>
        </div>
    )
};

const TitleComponent = () => (<h1>This is my Title</h1>);
*/

const Header = () => {
    return (
        <div className="header">
            <div className="logoContainer">
                <img className="logo" src="data:image/jpeg;base64,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"/>
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

const Body = () => {
    return (
        <main className="main">
            <div className="searchContainer">
                <input type="search" name="search" placeholder="Search food items..."/>
                <button type="button" className="searchbtn">Q</button>
            </div>
            <div className="restroContainer">
                <div>Card</div>
            </div>
        </main>
    );
};

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
