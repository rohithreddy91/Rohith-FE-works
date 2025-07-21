import React from 'react';
class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count :0
        }
        //console.log("child constructor");
        
    }

    componentDidMount(){
        //console.log("child componentDidMount");
    }

    render(){
        //console.log("child render");
        const {name, age, location} = this.props;
        const {count} = this.state;
        return (
            <div className="user-card">
                <h1>Count: {count}</h1>
                <button onClick = {()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>
                    Increment
                </button>
                <h2>Name: {name}</h2>
                <h3>Age: {age}</h3>
                <h3>Location: {location}</h3>
            </div>
        )
    }

};
export default UserClass;