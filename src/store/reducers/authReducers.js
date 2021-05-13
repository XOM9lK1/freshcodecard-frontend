import { AUTH_EMAIL, AUTH_PIN, AUTH_STATUS, AUTH_LOGIN } from '../types';

const initialState = {
    authStatus: false,
    email: null,
    firstName: null,
    lastName: null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_EMAIL: return { ...state, email: action.payload }
        case AUTH_LOGIN: return {
            ...state,
            authStatus: action.payload.authStatus,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            email: action.payload.email
        }
        default: return state;
    }

    return state;
};

