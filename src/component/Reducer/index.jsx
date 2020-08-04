const initialState = {
    total:0
}

function reducer(state = initialState,action){
    switch(action.type){
        case 'INCREASE':
            return {total: state.total+1}
        case 'DECREASE':
            return {total: state.total-1}
        default:
            return {total: 0}
    }
}


export default reducer;