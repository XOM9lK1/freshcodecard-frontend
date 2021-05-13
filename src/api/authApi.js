import { USERS } from '../users';

export const emailLoginRequest = (email) => USERS.find(u => u.email === email) || null;
export const pinLoginRequest = (email, pin) => USERS.find(u => u.email === email).pin === pin;