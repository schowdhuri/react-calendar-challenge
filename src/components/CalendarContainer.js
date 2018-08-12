import { connect } from "react-redux";

import * as actions from "../actions";

import { getMonth } from "../selectors";

import Calendar from "./Calendar";


const mapStateToProps = state => ({
    month: getMonth(state)
});

const mapDispatchToProps = dispatch => ({
    nextMonth() {
        dispatch(actions.nextMonth());
    },
    prevMonth() {
        dispatch(actions.prevMonth());
    },
    saveReminder(reminder, date) {
        if(reminder.id)
            dispatch(actions.editReminder(reminder));
        else
            dispatch(actions.addReminder({
                ...reminder,
                date
            }));
    },
    deleteReminder(reminder) {
        dispatch(actions.deleteReminder(reminder));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calendar);
