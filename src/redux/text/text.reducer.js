import { TextActionTypes } from './text.types';

const INITIAL_STATE = {
    texts: []
}

const textReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TextActionTypes.SET_TEXTS:
            return {
                ...state,
                texts: action.payload
            }
        default:
            return state;
    }
}

export default textReducer;