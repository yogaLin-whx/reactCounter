import React  from  "react";
import Counter from '../Counter';

class CounterGroup extends React.Component{

    constructor(props){
        super(props);
        this.state = {size:0,totalNumber:0};
    }

    handleResize = (event) =>{
        this.setState({
            size:event.target.value ? parseInt(event.target.value):0,
            totalNumber:0
        });
        
    }

    handleIncrease = () =>{
        this.setState((prevState) =>({
            totalNumber: prevState.totalNumber + 1
        }))
    }


    handleDecrease = () =>{
        this.setState((prevState) =>({
            totalNumber: prevState.totalNumber - 1
        }))
    }



    render(){
        const  initArrays = [...Array(this.state.size).keys()];

        return <div>
            <div>
                <label>
                    Group Size:
                    <input  onBlur={this.handleResize}  defaultValue="0"/>
                </label>
            </div>
            <div>
                Total Number: {this.state.totalNumber}
            </div>
            {
                initArrays.map(key => <Counter  GroupSize={this.state}  OnIncrease={this.handleIncrease}  OnDecrease={this.handleDecrease}  key={key}/>)
            }
            </div>;
    }

} 

export default CounterGroup;