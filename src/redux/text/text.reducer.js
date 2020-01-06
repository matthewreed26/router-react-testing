const INITIAL_STATE = {
    texts: []
}

const textReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_TEXTS':
            return {
                ...state,
                texts: action.payload
            }
        default:
            return state;
    }
}

export default textReducer;