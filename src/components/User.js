import { use, useState } from "react";
const User = (props) =>{
    const {name, age,location }= props
    const [count] = useState(0);
    const [count1] = useState(1);
    return(
        <div className="user-card">
            <h1>Count:{count}</h1>
            <h1>Count:{count1}</h1>
            <h2>Name:{name}</h2>
            <h3>Age: {age}</h3>
            <h3>Location: {location}</h3>
        </div>
    )
};
export default User;