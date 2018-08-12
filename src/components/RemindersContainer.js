import { connect } from "react-redux";

import * as actions from "../actions";

import { getRemindersByDate } from "../selectors";

import Reminders from "./Reminders";


const mapStateToProps = (state, { date }) => ({
    reminders: getRemindersByDate(state, date)
});

const mapDispatchToProps = (dispatch, { onEdit }) => ({
    onDelete(id) {
        dispatch(actions.deleteReminder(id));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Reminders);
