import React from  "react";

class Counter extends React.Component{

    constructor(props){
        super(props);
        this.state = {value:1};
    }

    OnIncrease = () =>{
        this.setState((prevState) =>({
            value: prevState.value + 1
        }))
    }

    OnDecrease = () =>{
        this.setState((prevState) =>({
            value: prevState.value - 1
        }))
    }


    render(){
        return (<div>
                <button  onClick={this.OnDecrease}>-</button>
                     <mark>{this.state.value}</mark>
                <button  onClick={this.OnIncrease}>+</button>
            </div>
        )
    }

}

export default Counter;