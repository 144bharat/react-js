import React from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById('root'));        

//THIS IS MY REACT ELEMENT
const h1 = React.createElement(
    "h1",
    {id:"h1tag"},
    "I am the text inside h1 bharat"
);

//THIS IS JSX
const jsxh1 = <h1>i am text inside jsx updated</h1>;


//JSX (this is not html but kind of same in look) --> parcel (Pass JSX to Babel) --> Babel --> React Element changed (by babel) --> rendered on root.

root.render(jsxh1);