import { createContext } from "react";
const UserContext = createContext({
    loggingInUser: "Default User",
});

export default UserContext;