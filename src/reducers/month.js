import * as ACTIONS from "../constants/actions";
import moment from "moment";

const initialState = moment();

export default (state=initialState, action) => {
    switch(action.type) {
        case ACTIONS.PREV_MONTH:
            return state.clone().subtract(1, "month");

        case ACTIONS.NEXT_MONTH:
            return state.clone().add(1, "month");
    }
    return state;
};
