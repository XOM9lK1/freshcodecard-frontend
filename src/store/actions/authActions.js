import { AUTH_LOGIN } from '../types';


export const authLogin = (email, firstName, lastName) => {
    return {
        type: AUTH_LOGIN,
        payload: {
            authStatus: true,
            email,
            firstName,
            lastName
        },
    }
};

