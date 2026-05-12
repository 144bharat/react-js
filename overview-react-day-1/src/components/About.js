import UserClass from "./UserClass";
import React from "react";
import { GITPROFILE_URL } from "../utils/constants";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent constructor called");

        this.state = {
            gitProfileInfo:null
        }
        
    }
    
    componentDidMount(){
        console.log("Parent componentDidMount called");
        const fetchUserInfo = async () => {
            const data = await fetch(GITPROFILE_URL);
            const json = await data.json();
            this.setState({
                gitProfileInfo: await json
            })
        }
        fetchUserInfo();
    }

    render(){
        console.log("Parent render called");
        if(this.state.gitProfileInfo == null){
            return(<h2>Loading.....</h2>)
        }
    
        return(
            <div className="border border-gray-400 shadow-lg w-10/12 mx-auto md:h-64 rounded-2xl my-44 flex md:flex-row flex-col">
    
                {/* 
                <h1>My About Us Page - Class Based</h1>
                <hr />
                <UserClass name={"Class child1"}/>
                <UserClass name={"Class child2"}/>
                */}
                <div className="md:w-2/12 w-full border-e border-amber-200">
                    <img src={this.state.gitProfileInfo.avatar_url} alt="profile pic" className="rounded-full size-32 m-auto p-1" />
                    <p className="font-semibold text-2xl text-center font-sans">{this.state.gitProfileInfo.name}</p>
                    <p className="italic font-light text-center"><span className="font-normal">Software Developer</span> - Cicada Green Cons.</p>
                </div>
                <div className="profile-content md:w-10/12 w-full flex justify-center items-center text-gray-400 italic p-[5px]">
                    {`“ ${this.state.gitProfileInfo.bio} ”`}
                </div>
            </div>
        )
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