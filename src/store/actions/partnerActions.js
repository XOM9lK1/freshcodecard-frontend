import { DATA } from "../../data";
import { LOAD_PARTNERS } from "../types";

export const loadPartners = () => {
    return {
        type: LOAD_PARTNERS,
        payload: DATA,
    }
};