import { combineReducers } from "redux";

import month from "./month";
import reminders from "./reminders";

export default combineReducers({
    month,
    reminders
});
