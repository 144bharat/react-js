import React from "react";
import ReactDOM from "react-dom/client";

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

const headerElement = React.createElement(
    "div",
    {className:'title'},
    [
        React.createElement(
            "h1",
            {key:"head1"},
            "This is h1 heading"
        ),
        React.createElement(
            "h2",
            {key:"head2"},
            "This is h2 heading"
        ),
        React.createElement(
            "h3",
            {key:"head3"},
            "This is h3 heading"
        )
    ]
)

const TitleComponent = () => { 
    return <h1>I am the title</h1>;
}

const jsxHeaderElement = (
    <div className="title">
        <h1>This is h1 heading</h1>
        <h2>This is h2 heading</h2>
        <h3>This is h3 heading</h3>
    </div>
);

const HeaderComponent = () =>{
    return (
        <>
        <TitleComponent/>
        {jsxHeaderElement}
        </>
    );
}


root.render(<HeaderComponent/>);
