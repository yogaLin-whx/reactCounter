import React from 'react';
import Counter from './Counter';

class CounterGroup extends React.Component{

    constructor(props){
        super(props);
        this.size = 6;
    }

    render(){
        const  initArrays = [...Array(this.size).keys()];

        return <div>
            {
                initArrays.map(key => <Counter  key={key}/>)
            }
            </div>;
    }

} 

export default CounterGroup;