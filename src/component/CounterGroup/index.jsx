import React  from  "react";
import Counter from '../Counter';
import {INCREASE,DECREASE} from '../Action/index'
import { connect } from "react-redux";
import PropTypes from 'prop-types';


class CounterGroup extends React.Component{

    constructor(props){
        super(props);
        this.state = {size:0};
    }

    handleResize = (event) =>{
        this.setState({
            size:event.target.value ? parseInt(event.target.value):0
        });
       this.props.handleResize()
    }

  

    // handleDelete = (deleteCount) =>{
    //     console.log(deleteCount);
    //     console.log("total:" + this.state.totalNumber);
    //     this.setState((prevState) => ({
    //         totalNumber: prevState.totalNumber + deleteCount/2
    //     }))
    // }



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
                Total Number: {this.props.total}
            </div>
            {
                initArrays.map(key => <Counter  groupSize={this.state.size} 
                     OnIncrease={this.props.handleIncrease}  OnDecrease={this.props.handleDecrease}  key={key}/>)
            }
            </div>;
    }

} 


CounterGroup.propTypes = {
    total:PropTypes.number.isRequired,
    handleIncrease:PropTypes.func.isRequired,
    handleDelete:PropTypes.func.isRequired,
    handleResize:PropTypes.func
}


const mapStateToProps = state => {
    return {total: state.total}
}

const mapDispatchToProps = dispatch => ({
    handleIncrease: () => dispatch({type:INCREASE}),
    handleDecrease: () => dispatch({type:DECREASE}),
    handleResize: () => dispatch({type:''})
})

export default connect(mapStateToProps,mapDispatchToProps)(CounterGroup);
