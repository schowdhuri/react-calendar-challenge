import * as ACTIONS from "../constants/actions";

import shortId from "shortid";

export const addReminder = value => ({
    type: ACTIONS.ADD_REMINDER,
    value: {
        id: shortId.generate(),
        ...value
    }
});

export const editReminder = value => ({
    type: ACTIONS.EDIT_REMINDER,
    value
});

export const deleteReminder = id => ({
    type: ACTIONS.DELETE_REMINDER,
    id
});

export const prevMonth = () => ({
    type: ACTIONS.PREV_MONTH
});

export const nextMonth = () => ({
    type: ACTIONS.NEXT_MONTH
});