import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

const {loggingInUser} = UserContext;

// const About = ()=>{
//     return (
//         <div>
//             <h1>About Us</h1>
//             <p>This is a food delivery app built with React.</p>
//             <User name = {"Rohith Reddy"} age= {"26"} location= {"Banglore"}/>
//             <UserClass name = {"Rohith Reddy (class)"} age= {"26"} location= {"Banglore"}/>
//         </div>
//     )
// };

class About extends Component {

    constructor(props){
        super(props);
        //console.log("parent constructor");
        
    }

    // async componentDidMount(){
    //     const gitData = await fetch("https://api.github.com/rohithreddy91");
    //     const jsonData = await gitData.json();
    //     console.log("json",jsonData);
    // }

    render(){
        //console.log("parent render");
         return (
        <div>
            <h1>About Us</h1>
            <div>
                LoggedInUser:
                <UserContext.Consumer>
                    {({loggingInUser})=> <h1 className="font-bold text-xl">{loggingInUser}</h1>}
                </UserContext.Consumer>
            </div>
            <p>This is a food delivery app built with React.</p>
            <User name = {"Rohith Reddy"} age= {"26"} location= {"Banglore"}/>
            <UserClass name = {"Rohith Reddy (class)"} age= {"26"} location= {"Banglore"}/>
        </div>
    )
    }

}
export default About;