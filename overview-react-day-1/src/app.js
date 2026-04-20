import React from "react";
import ReactDOM from "react-dom/client";
import { UserRoundPen , Search, SquareDot, SquareMinus } from "lucide-react";

import Header from "./components/Header";
import Body from "./components/Body";

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
