import { createSelector } from "reselect";

import * as  ACTIONS from "../constants/actions";

export const getMonth = state => state.month.clone();

export const getRemindersByDate = (state, date) =>
    state.reminders
        .filter(r => r.date === date)
        .sort((a, b) =>
            parseInt(a.time.replace(":", ""), 10) - parseInt(b.time.replace(":", ""), 10)
        );
