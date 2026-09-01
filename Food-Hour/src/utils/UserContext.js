import { createContext } from "react";

const UserContext = createContext({
    loggedInUserName: "Default User"
});

export default UserContext;