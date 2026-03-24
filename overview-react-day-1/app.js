//  const root = document.getElementById("root");
//         const h1 = document.createElement("h1");
//         h1.innerText="bharat gautam";
//         root.appendChild(h1);


// 14-03-2026 - Day-2: Now i will create the same h1 tag with content using react js

import React from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById('root'));        
const h1 = React.createElement(
    "h1",
    {id:"h1tag"},
    "I am the text inside h1"
);
root.render(h1);