import { useState } from "react";

const User = (props) => {
    const {name} = props;
    const [count]=useState(0);
     return(
            <div className="userCard">
                <p>{name}</p>
                <h1>Bharat - Software Developer</h1>
                <h3>Location - Delhi</h3>
                <p>{count}</p>
            </div>
    )
}

export default User;