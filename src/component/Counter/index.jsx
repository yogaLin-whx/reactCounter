import React from  "react";

class Counter extends React.Component{

    constructor(props){
        super(props);
        this.state = {value:0};
    }

    OnIncrease = () =>{
        this.setState((prevState) =>({
            value: prevState.value + 1
        }));
        this.props.OnIncrease();
    }

    OnDecrease = () =>{
        this.setState((prevState) =>({
            value: prevState.value - 1
        }))
        this.props.OnDecrease();
    }


    render(){
        return (<div>
                <button  onClick={this.OnDecrease}>-</button>
                     <mark>{this.state.value}</mark>
                <button  onClick={this.OnIncrease}>+</button>
            </div>
        )
    }


    static getDerivedStateFromProps(props, state) {

        if(props.groupSize !== state.size){
            this.setState = () =>({
                value:0
            });
        }
         return {
          user: props.user
         };
    }


}

export default Counter;