import * as ACTIONS from "../constants/actions";

const initialState = [];

export default (state=initialState, action) => {
    switch(action.type) {
        case ACTIONS.ADD_REMINDER:
            console.log(action)
            return [
                ...state,
                action.value
            ];

        case ACTIONS.EDIT_REMINDER: {
            const index = state.findIndex(r => r.id == action.value.id);
            return [
                ...state.slice(0, index),
                action.value,
                ...state.slice(index + 1)
            ];
        }

        case ACTIONS.DELETE_REMINDER: {
            const index = state.findIndex(r => r.id == action.id);
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];
        }
    }
    return state;
};
