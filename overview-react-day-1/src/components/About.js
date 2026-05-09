import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent constructor called");
    }
    render(){
        console.log("Parent render called");
        return(
            <div>
                <h1>My About Us Page - Class Based</h1>
                <User name={"Function Bharat Component"}/>
                <hr />
                <UserClass name={"Class child1"}/>
                <UserClass name={"Class child2"}/>
            </div>
        )
    }

    componentDidMount(){
        console.log("Parent componentDidMount called");
    }
}
/*
const About = () =>{
    return(
        <div>
            <h1>My About Us Page</h1>
            <User name={"Function Bharat Component"}/>
            <hr />
            <UserClass name={"Class Bharat Component"}/>
        </div>
    )
}
*/
export default About;