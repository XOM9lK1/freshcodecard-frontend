import { LOAD_PARTNERS } from "../types";

const initialState = {
    partners: [],
};

export const partnerReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PARTNERS: return {...state, partners: action.payload}
        default: return state;
    }
    
    return state;
};

